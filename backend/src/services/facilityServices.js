const mongoose = require("mongoose");
const facility = require("../models/facility");
const departmentServices = require("./departmentServices");
const ApiError = require("../utils/ApiError");
const { MAX_FACILITY_IMAGES } = require("../middleware/uploadMiddleware");


// Every READ of a facility must exclude the stored image bytes —
// otherwise each facility drags up to 1.5MB of raw photo data into
// API responses (and into the chatbot's prompt). Only
// getFacilityImage below ever loads them. Applied explicitly to each
// query rather than relying on a schema-level `select: false`, which
// is unreliable inside arrays of subdocuments.
const WITHOUT_IMAGE_BYTES = "-images.data";

const escapeRegex = (value) => {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};


// Each stored image must be a complete pair — real bytes AND a MIME
// type — and a facility holds at most MAX_FACILITY_IMAGES of them.
// `undefined` means "no images supplied", which is valid (an update
// that doesn't touch the photos).
const assertValidImages = (images) => {

    if (images === undefined) {
        return;
    }

    if (!Array.isArray(images)) {
        throw new ApiError(400, "images must be a list of uploaded photos!");
    }

    if (images.length > MAX_FACILITY_IMAGES) {
        throw new ApiError(400, `A facility can have at most ${MAX_FACILITY_IMAGES} images!`);
    }

    for (const image of images) {

        const hasData = Buffer.isBuffer(image?.data) && image.data.length > 0;
        const hasContentType = typeof image?.contentType === "string" && image.contentType.length > 0;

        if (!hasData || !hasContentType) {
            throw new ApiError(400, "Each image must include both real image data and a contentType.");
        }
    }
};


exports.createFacility = async (body) => {

    assertValidImages(body.images);

    let departmentId = null;

    if (body.department) {
        const department = await departmentServices.findDepartment(body.department);
        departmentId = department._id;
    }

    const createdFacility = await facility.create({
        name: body.name,
        category: body.category,
        description: body.description,
        department: departmentId,
        location: body.location,
        availability: body.availability,
        features: body.features,
        inCharge: body.inCharge,
        images: body.images
    });

    // Re-read without the image bytes — the freshly created document
    // still carries the buffers we just wrote, and returning it as-is
    // would send them all back in the response.
    return await facility.findById(createdFacility._id)
        .select(WITHOUT_IMAGE_BYTES)
        .populate("department", "name code");
};



exports.getFacilities = async () => {

    return await facility.find()
        .select(WITHOUT_IMAGE_BYTES)
        .populate("department", "name code")
        .sort({ category: 1, name: 1 });
};

 
 
// Distinct categories actually present in the database — the chatbot
// grounds its category extraction against these real values instead
// of guessing one, the same way faculty designations work.
exports.getCategories = async () => {
 
    return await facility.distinct("category");
};
 
 

// Combines name (partial match), category (exact match), and
// department in a single query — same pattern as
// facultyServices.searchFaculty — so a question like "labs in the CSE
// department" or "Central Library" can be answered in one call.
exports.searchFacilities = async (body) => {

    const filter = {};


    if (body.category) {

        const category = body.category.trim();

        if (category) {
            filter.category = {
                $regex: `^${escapeRegex(category)}$`,
                $options: "i"
            };
        }
    }


    if (body.department) {

        const departmentData = await departmentServices.findDepartment(body.department);

        if (!departmentData) {
            throw new ApiError(404, "Department not found!");
        }

        filter.department = departmentData._id;
    }


    if (body.search) {

        const search = body.search.trim();

        if (search) {
            filter.name = {
                $regex: escapeRegex(search),
                $options: "i"
            };
        }
    }


    return await facility.find(filter)
        .select(WITHOUT_IMAGE_BYTES)
        .populate("department", "name code")
        .sort({ category: 1, name: 1 });
};


// Facilities belonging to one department, optionally narrowed by
// category — a thin convenience wrapper over searchFacilities.
exports.getDepartmentFacilities = async (departmentId, category = null) => {

    if (!mongoose.Types.ObjectId.isValid(departmentId)) {
        throw new ApiError(400, "Invalid department ID!");
    }

    const filter = { department: departmentId };

    if (category) {
        filter.category = {
            $regex: `^${escapeRegex(category.trim())}$`,
            $options: "i"
        };
    }

    return await facility.find(filter)
        .select(WITHOUT_IMAGE_BYTES)
        .populate("department", "name code")
        .sort({ name: 1 });
};


 
// Get facility by ID
exports.getFacilityById = async (id) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid facility ID!");
    }

    const facilityData = await facility.findById(id)
        .select(WITHOUT_IMAGE_BYTES)
        .populate("department", "name code");

    if (!facilityData) {
        throw new ApiError(404, "Facility not found");
    }

    return facilityData;
};


// The ONLY place that loads stored image bytes: one photo of one
// facility, by its position (0-2) in the facility's images list. The
// controller streams it straight to the browser.
exports.getFacilityImage = async (id, index) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid facility ID!");
    }

    const position = Number(index);

    if (!Number.isInteger(position) || position < 0 || position >= MAX_FACILITY_IMAGES) {
        throw new ApiError(404, "Image not found!");
    }

    const facilityData = await facility.findById(id).select("images");

    if (!facilityData) {
        throw new ApiError(404, "Facility not found");
    }

    const image = facilityData.images[position];

    if (!image || !image.data) {
        throw new ApiError(404, "Image not found!");
    }

    return image;
};



// Update facility
exports.updateFacility = async (req) => {

    const { id } = req.params;
    const body = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid facility ID!");
    }

    assertValidImages(body.images);

    // Loaded WITH its images on purpose: saving a document that was
    // fetched with part of an array projected out is a trap.
    const facilityDoc = await facility.findById(id);

    if (!facilityDoc) {
        throw new ApiError(404, "Facility not found!");
    }


    if (body.name !== undefined) {
        facilityDoc.name = body.name;
    }

    if (body.category !== undefined) {
        facilityDoc.category = body.category;
    }

    if (body.description !== undefined) {
        facilityDoc.description = body.description;
    }

    if (body.location !== undefined) {
        facilityDoc.location = body.location;
    }

    if (body.availability !== undefined) {
        facilityDoc.availability = body.availability;
    }

    if (body.features !== undefined) {
        facilityDoc.features = body.features;
    }

    if (body.inCharge !== undefined) {
        facilityDoc.inCharge = body.inCharge;
    }

    // Replaces the WHOLE photo set. The controller only sets
    // body.images when new files were actually uploaded, so editing
    // any other field leaves the existing photos untouched.
    if (body.images !== undefined) {
        facilityDoc.images = body.images;
    }

    if (body.department !== undefined) {

        if (!body.department) {
            facilityDoc.department = undefined;
        } else {

            const departmentData = await departmentServices.findDepartment(body.department);

            facilityDoc.department = departmentData._id;
        }
    }


    await facilityDoc.save();

    return await facility.findById(id)
        .select(WITHOUT_IMAGE_BYTES)
        .populate("department", "name code");
};
 

// Delete facility
exports.deleteFacility = async (id) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid facility ID!");
    }

    const deletedFacility = await facility.findByIdAndDelete(id)
        .select(WITHOUT_IMAGE_BYTES);

    if (!deletedFacility) {
        throw new ApiError(404, "Facility not found");
    }

    return deletedFacility;
};

