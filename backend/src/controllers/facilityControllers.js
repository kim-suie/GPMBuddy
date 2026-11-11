const facilityServices = require("../services/facilityServices");
const success = require("../utils/successResponseUtil");
const ApiError = require("../utils/ApiError");


// A request that carries photos is multipart/form-data, where every
// field arrives as a plain string. The admin panel JSON-encodes the
// fields that are really arrays/objects (the facility form builds
// location, availability, contact and inCharge as nested objects) so
// they can be restored here. A plain JSON request never goes through
// this, so edits without photos are unaffected.
const MULTIPART_JSON_FIELDS = ["features", "location", "availability", "inCharge"];

const restoreMultipartFields = (body) => {

    for (const field of MULTIPART_JSON_FIELDS) {

        if (typeof body[field] !== "string") {
            continue;
        }

        try {
            const parsed = JSON.parse(body[field]);

            if (parsed && typeof parsed === "object") {
                body[field] = parsed;
            }
        } catch {
            // Not JSON — leave the original value for the service/schema to judge.
        }
    }
};


// multer (memory storage) put the uploaded photos on req.files as raw
// bytes; turn them into the { data, contentType } entries the schema
// stores. The admin never sees or types a URL, they just pick files.
const applyUploadedImages = (req) => {

    if (req.is("multipart/form-data")) {
        restoreMultipartFields(req.body);
    }

    if (Array.isArray(req.files) && req.files.length > 0) {
        req.body.images = req.files.map(file => ({
            data: file.buffer,
            contentType: file.mimetype
        }));
    }
};


exports.createFacility = async (req, res) => {
        applyUploadedImages(req);
        const createdFacility = await facilityServices.createFacility(req.body);

        return success(res, 201, "Facility created successfully", createdFacility);
};


exports.getFacilities = async (req, res) => {
        const facilities = await facilityServices.getFacilities();

        return success(res, 200, "Facilities fetched successfully", facilities );
};


exports.getFacilityById = async (req, res) => {
    
        const facility = await facilityServices.getFacilityById(req.params.id);

        return success(res, 200, "Facility fetched successfully", facility );

};


// Streams one stored photo straight from MongoDB — NOT wrapped in the
// usual JSON envelope, because this response IS the image (an <img
// src> points directly at this route).
exports.getFacilityImage = async (req, res) => {
        const image = await facilityServices.getFacilityImage(req.params.id, req.params.index);

        res.set("Content-Type", image.contentType);
        // Safe to cache for a day because every URL the app builds
        // carries ?v=<the facility's updatedAt>, so replacing a photo
        // changes the URL and bypasses the stale copy.
        res.set("Cache-Control", "public, max-age=86400");
        res.send(image.data);
};


exports.updateFacility = async (req, res) => {
        // If no new photos were uploaded, body.images stays undefined
        // and the facility's existing photos are left untouched.
        applyUploadedImages(req);

        const updatedFacility = await facilityServices.updateFacility(req);
        return success(res, 200, "Facility updated successfully", updatedFacility);
};


exports.deleteFacility = async (req, res) => {
        const deletedFacility = await facilityServices.deleteFacility(req.params.id);

        return success(res, 200, "Facility deleted successfully", deletedFacility );
};



exports.getDepartmentFacilities = async (req, res) => {
        const { departmentId } = req.params;
        const { category } = req.body;

        const departmentFacilities = await facilityServices.getDepartmentFacilities(departmentId, category);

        return success(res, 200, "Department facilities fetched successfully", departmentFacilities);
   
};


exports.searchFacilities = async (req, res) => {
        const facilities = await facilityServices.searchFacilities(req.body);

        return success(res, 200, "Facilities searched successfully", facilities );
};