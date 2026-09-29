const mongoose = require("mongoose");

const subject = require("../models/subject");
const ApiError = require("../utils/ApiError");


const escapeRegex = (value) => {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};


// Trims each entry and drops duplicates (exact match, case-sensitive)
// and empties. No lookup, no verification against any other
// collection — these are plain, admin-entered strings.
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


exports.createSubject = async (body) => {

    return await subject.create({
        name: body.name,
        departments: normalizeStringList(body.departments),
        type: normalizeStringList(body.type),
        description: body.description,
        syllabus: body.syllabus
    });
};


exports.getSubjects = async () => {

    return await subject.find().sort({ name: 1 });
};


// Distinct department strings actually used across subjects — the
// chatbot grounds its department extraction against these, since
// there's no separate Department reference to check against.
exports.getDepartmentNames = async () => {

    return await subject.distinct("departments");
};


// Distinct subject types actually present in the database. Mongo's
// distinct() on an array field already returns each unique element
// across all documents, so this works the same whether "type" holds
// one value or several per subject.
exports.getSubjectTypes = async () => {

    return await subject.distinct("type");
};


// Combines name (partial match), department, and type in one query.
// Both "department" and "type" match if the subject's array CONTAINS
// that value (case-insensitive, exact element match) — standard Mongo
// behaviour for a query value against an array field. Subjects common
// to every department (an empty "departments" array) are included
// when filtering by department, unless includeCommon is false.
exports.searchSubjects = async (body) => {

    const filter = {};


    if (body.type) {

        const type = body.type.trim();

        if (type) {
            filter.type = {
                $regex: `^${escapeRegex(type)}$`,
                $options: "i"
            };
        }
    }


    if (body.department) {

        const department = body.department.trim();

        if (department) {

            const departmentMatch = {
                $regex: `^${escapeRegex(department)}$`,
                $options: "i"
            };

            if (body.includeCommon === false) {
                filter.departments = departmentMatch;
            } else {
                // $or is a top-level query operator, not something
                // that nests under a field: either the array contains
                // this department, or the array is empty (common to
                // every department).
                filter.$or = [
                    { departments: departmentMatch },
                    { departments: { $size: 0 } }
                ];
            }
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


    return await subject.find(filter).sort({ name: 1 });
};


exports.getSubjectById = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid subject ID!");
    }

    const subjectData = await subject.findById(id);

    if (!subjectData) {
        throw new ApiError(404, "Subject not found!");
    }

    return subjectData;
};


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

    // Sending departments (including []) replaces the whole list.
    if (body.departments !== undefined) {
        subjectDoc.departments = normalizeStringList(body.departments);
    }


    await subjectDoc.save();

    return subjectDoc;
};


exports.deleteSubject = async (id) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid subject ID!");
    }

    const deletedSubject = await subject.findOneAndDelete(id);

    if (!deletedSubject) {
        throw new ApiError(404, "Subject not found!");
    }

    return deletedSubject;
};