const facultyServices = require("../services/facultyServices");
const success = require("../utils/successResponseUtil");
const ApiError = require("../utils/ApiError");

exports.getFaculties = async (req, res) => {
    const data = await facultyServices.getFaculties();
    success(res, 200, "Faculty found", data);
}

exports.getFacultyById = async (req, res) => {
    const data = await facultyServices.getFacultyById(req.params);
    if (!data) {
        throw new ApiError(404, "Faculty not found!");
    }
    success(res, 200, "Faculty found", data);
}

exports.searchFaculty = async (req, res) => {
    const data = await facultyServices.searchFaculty(req.body);
    success(res, 200, "Faculty found", data);
};

exports.createFaculty = async (req, res) => {
    const createdFaculty = await facultyServices.createFaculty(req.body);
    if (!createdFaculty) {
        throw new ApiError(400, "Faculty not created!");
    }
    success(res, 201, "Faculty created successfully", createdFaculty);
}

exports.updateFaculty = async (req, res) => {
    const updatedFaculty = await facultyServices.updateFaculty(req);
    if (!updatedFaculty) {
        throw new ApiError(400, "Faculty not updated!");
    }
    success(res, 200, "Faculty updated successfully", updatedFaculty);
}

exports.deleteFaculty = async (req, res) => {
    const deletedFaculty = await facultyServices.deleteFaculty(req.params);
    if (!deletedFaculty) {
        throw new ApiError(400, "Faculty not deleted!");
    }
    success(res, 200, "Faculty deleted successfully", deletedFaculty);
}