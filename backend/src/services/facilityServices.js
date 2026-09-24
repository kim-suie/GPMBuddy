const facility = require("../models/facility");
const departmentServices = require("./departmentServices");
const ApiError = require("../utils/ApiError");

const escapeRegex = (value) => {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};


exports.createFacility = async (body) => {

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
        contact: body.contact,
        features: body.features,
        rules: body.rules,
        eligibility: body.eligibility,
        charges: body.charges,
        inCharge: body.inCharge,
        images: body.images
    });

    return await createdFacility.populate("department");
};


exports.getFacilities = async () => {
 
    return await facility.find()
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
        .populate("department", "name code")
        .sort({ name: 1 });
};
 
 
// Get facility by ID
exports.getFacilityById = async (id) => {

    const facility = await facility.findById(id)
        .populate("department", "name code");

    if (!facility) {
        throw new ApiError(404, "Facility not found");
    }

    return facility;
};


// Update facility
exports.updateFacility = async (req) => {
 
    const { id } = req.params;
    const body = req.body;
 
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
 
    if (body.contact !== undefined) {
        facilityDoc.contact = body.contact;
    }
 
    if (body.features !== undefined) {
        facilityDoc.features = body.features;
    }
 
    if (body.rules !== undefined) {
        facilityDoc.rules = body.rules;
    }
 
    if (body.eligibility !== undefined) {
        facilityDoc.eligibility = body.eligibility;
    }
 
    if (body.charges !== undefined) {
        facilityDoc.charges = body.charges;
    }
 
    if (body.inCharge !== undefined) {
        facilityDoc.inCharge = body.inCharge;
    }
 
    if (body.images !== undefined) {
        facilityDoc.images = body.images;
    }
 
    if (body.department !== undefined) {
 
        if (!body.department) {
            facilityDoc.department = undefined;
        } else {
 
            const departmentData = await findDepartment(body.department);
 
            if (!departmentData) {
                throw new ApiError(404, "Department not found!");
            }
 
            facilityDoc.department = departmentData._id;
        }
    }
 
 
    await facilityDoc.save();
 
    return await facilityDoc.populate("department", "name code");
};
 

// Delete facility
exports.deleteFacility = async (id) => {

    const deletedFacility = await facility.findByIdAndDelete(id);

    if (!deletedFacility) {
        throw new ApiError(404, "Facility not found");
    }

    return deletedFacility;
};

