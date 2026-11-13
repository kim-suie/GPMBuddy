
const mongoose = require("mongoose");

const subject = require("../models/subject");
const department = require("../models/department");
const departmentServices = require("../services/departmentServices");
const ApiError = require("../utils/ApiError");


const escapeRegex = (value) => {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};


// Trims each entry and drops duplicates (exact match, case-sensitive)
// and empty strings.
const normalizeStringList = (rawList) => {

    if (rawList === undefined || rawList === null) {
        return [];
    }

    if (!Array.isArray(rawList)) {
        throw new ApiError(400, "This field must be an array of strings!");
    }

    const seen = new Set();
    const result = [];

    for (const raw of rawList) {

        if (typeof raw !== "string" || !raw.trim()) {
            continue;
        }

        const value = raw.trim();

        if (!seen.has(value)) {
            seen.add(value);
            result.push(value);
        }
    }

    return result;
};


// Verifies every department using findDepartment()
// and returns the corresponding Department ObjectIds.
const verifyDepartments = async (rawDepartments) => {

    const departmentNames = normalizeStringList(rawDepartments);

    const departmentIds = new Set();

    for (const departmentName of departmentNames) {

        const departmentData = await departmentServices.findDepartment(
            departmentName
        );

        departmentIds.add(departmentData._id.toString());
    }

    return [...departmentIds];
};

// CREATE SUBJECT
exports.createSubject = async (body) => {

    const departmentIds = await verifyDepartments(body.departments);

    const newSubject = await subject.create({
        name: body.name,
        departments: departmentIds,
        type: normalizeStringList(body.type),
        description: body.description,
        syllabus: body.syllabus
    });

    return await newSubject.populate("departments", "name code");
};


// GET ALL SUBJECTS
exports.getSubjects = async () => {

    return await subject.find()
        .populate("departments", "name code")
        .sort({ name: 1 });
};


// DISTINCT DEPARTMENT NAMES USED IN SUBJECTS
exports.getDepartmentNames = async () => {

    const departmentIds = await subject.distinct("departments");

    if (!departmentIds.length) {
        return [];
    }

    const departments = await department.find({
        _id: { $in: departmentIds }
    })
        .select("name")
        .sort({ name: 1 })
        .lean();

    return departments.map(departmentData => departmentData.name);
};


// DISTINCT SUBJECT TYPES
exports.getSubjectTypes = async () => {

    return await subject.distinct("type");
};


// SEARCH SUBJECTS
exports.searchSubjects = async (body) => {

    const filter = {};


    // SUBJECT TYPE FILTER
    if (body.type) {

        const type = body.type.trim();

        if (type) {
            filter.type = {
                $regex: `^${escapeRegex(type)}$`,
                $options: "i"
            };
        }
    }


    // DEPARTMENT FILTER
    if (body.department) {

        // Verify department name/code and get its ObjectId.
        const departmentData = await departmentServices.findDepartment(
            body.department
        );

        const departmentMatch = {
            departments: departmentData._id
        };

        if (body.includeCommon === false) {

            filter.departments = departmentData._id;

        } else {

            // Include subjects assigned to this department
            // and subjects common to every department.
            filter.$or = [
                departmentMatch,
                { departments: { $size: 0 } }
            ];
        }
    }


    // SUBJECT NAME PARTIAL SEARCH
    if (body.search) {

        const search = body.search.trim();

        if (search) {
            filter.name = {
                $regex: escapeRegex(search),
                $options: "i"
            };
        }
    }


    return await subject.find(filter)
        .populate("departments", "name code")
        .sort({ name: 1 });
};


// GET SUBJECT BY ID
exports.getSubjectById = async (id) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid subject ID!");
    }

    const subjectData = await subject.findById(id)
        .populate("departments", "name code");

    if (!subjectData) {
        throw new ApiError(404, "Subject not found!");
    }

    return subjectData;
};


// UPDATE SUBJECT
exports.updateSubject = async (req) => {

    const { id } = req.params;
    const body = req.body;


    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid subject ID!");
    }


    const subjectDoc = await subject.findById(id);

    if (!subjectDoc) {
        throw new ApiError(404, "Subject not found!");
    }


    if (body.name !== undefined) {
        subjectDoc.name = body.name;
    }

    if (body.type !== undefined) {
        subjectDoc.type = normalizeStringList(body.type);
    }

    if (body.description !== undefined) {
        subjectDoc.description = body.description;
    }

    if (body.syllabus !== undefined) {
        subjectDoc.syllabus = body.syllabus;
    }


    // Verify every department and replace the complete array.
    if (body.departments !== undefined) {

        subjectDoc.departments = await verifyDepartments(
            body.departments
        );
    }


    await subjectDoc.save();

    return await subjectDoc.populate("departments", "name code");
};


// DELETE SUBJECT
exports.deleteSubject = async (id) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid subject ID!");
    }

    const deletedSubject = await subject.findByIdAndDelete(id);

    if (!deletedSubject) {
        throw new ApiError(404, "Subject not found!");
    }

    return deletedSubject;
};
