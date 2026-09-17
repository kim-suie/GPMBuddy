const mongoose = require("mongoose");

const Faculty = require("../models/faculty");
const department = require("../models/department");
const ApiError = require("../utils/ApiError");


const escapeRegex = (value) => {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};


const findDepartment = async (departmentInput) => {

    if (
        !departmentInput ||
        typeof departmentInput !== "string" ||
        !departmentInput.trim()
    ) {
        throw new ApiError(400, "Department is required!");
    }

    const value = departmentInput.trim();

    const departmentData = await department.findOne({
        $or: [
            {
                code: {
                    $regex: `^${escapeRegex(value)}$`,
                    $options: "i"
                }
            },
            {
                name: {
                    $regex: `^${escapeRegex(value)}$`,
                    $options: "i"
                }
            }
        ]
    });

    if (!departmentData) {
        throw new ApiError(404, "Department not found!");
    }

    return departmentData;
};


exports.createFaculty = async (body) => {

    const department = await findDepartment(body.department);

    const faculty = await Faculty.create({
        name: body.name,
        department: department._id,
        designation: body.designation,
        qualification: body.qualification || [],
        specialization: body.specialization || [],
        phone: body.phone || "",
        office: body.office || "",
        profileImage: body.profileImage || "",
        bio: body.bio || "",
        joiningYear: body.joiningYear
    });

    
    return await faculty.populate("department");
};


exports.getFaculties = async () => {

    return await Faculty.find({ isActive: true })
        .populate("department")
        .sort({ name: 1 });
};


exports.searchFaculty = async (body) => {

    const filter = {
        isActive: true
    };


    
    if (body.department) {

        const department = await findDepartment(body.department);

        filter.department = department._id;
    }


    if (body.designation) {

        const designation = body.designation.trim();

        if (designation) {
            filter.designation = {
                $regex: `^${escapeRegex(designation)}$`,
                $options: "i"
            };
        }
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


    return await Faculty.find(filter)
        .populate("department")
        .sort({ name: 1 });
};


exports.getFacultyById = async (params) => {

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
        throw new ApiError(400, "Invalid faculty ID!");
    }

    return await Faculty.findOne({
        _id: params.id,
        isActive: true
    }).populate("department");
};



exports.updateFaculty = async (req) => {

    const { id } = req.params;
    const body = req.body;


    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid faculty ID!");
    }


    const faculty = await Faculty.findById(id);

    if (!faculty) {
        throw new ApiError(404, "Faculty not found!");
    }



    if (body.name !== undefined) {
        faculty.name = body.name;
    }

    if (body.designation !== undefined) {
        faculty.designation = body.designation;
    }

    if (body.qualification !== undefined) {
        faculty.qualification = body.qualification;
    }

    if (body.specialization !== undefined) {
        faculty.specialization = body.specialization;
    }

    if (body.phone !== undefined) {
        faculty.phone = body.phone;
    }

    if (body.office !== undefined) {
        faculty.office = body.office;
    }

    if (body.profileImage !== undefined) {
        faculty.profileImage = body.profileImage;
    }

    if (body.bio !== undefined) {
        faculty.bio = body.bio;
    }

    if (body.joiningYear !== undefined) {
        faculty.joiningYear = body.joiningYear;
    }

    if (body.isActive !== undefined) {
        faculty.isActive = body.isActive;
    }


    if (body.department !== undefined) {

        const department = await findDepartment(body.department);

        faculty.department = department._id;
    }


    await faculty.save();

    return await faculty.populate("department");
};


exports.deleteFaculty = async (params) => {

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
        throw new ApiError(400, "Invalid faculty ID!");
    }

    const faculty = await Faculty.findOneAndUpdate(
        {
            _id: params.id,
            isActive: true
        },
        {
            isActive: false
        },
        {
            returnDocument: "after"
        }
    ).populate("department");

    if (!faculty) {
        throw new ApiError(404, "Faculty not found!");
    }

    return faculty;
};