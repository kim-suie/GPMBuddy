const adminServices = require("../services/adminServices");
const success = require("../utils/successResponseUtil");
const ApiError = require("../utils/ApiError");

exports.getAdmins = async (req, res) => {
    const data = await adminServices.getAdmins();
    success(res, 200, "Admin found", data);
}

exports.createAdmin = async (req, res) => {
    const createdAdmin = await adminServices.createAdmin(req.body);
    if(!createdAdmin){
        throw new ApiError(400, "Admin not created!");
    }
    success(res, 201, "Admin created successfully", createdAdmin);
}

exports.updateAdmin = async (req, res) => {
    const updatedAdmin = await adminServices.updateAdmin(req);
    if(!updatedAdmin){
        throw new ApiError(400, "Admin not updated!");
    }
    success(res, 200, "Admin updated successfully", updatedAdmin);
}

exports.deleteAdmin = async (req, res) => {
    const deletedAdmin = await adminServices.deleteAdmin(req.params);
    if(!deletedAdmin){
        throw new ApiError(400, "Admin not deleted!");
    }
    success(res, 200, "Admin deleted successfully", deletedAdmin);
}