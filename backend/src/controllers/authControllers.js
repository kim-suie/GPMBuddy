const authServices = require("../services/authServices");
const success = require("../utils/successResponseUtil")

exports.login = async (req, res) => {
    
    const {username, password, role} = req.body;
    
    const data = await authServices.login(username, password, role);
    success(res, 200, "Login successful", data);
}

exports.getCurrentAdmin = async (req, res) => {
    const admin = req.user;
    success(res, 200, "Admin data", admin);

}

exports.logout = async (req, res) => {
    success(res, 200, "Logged out successfully");
}

exports.changePassword = async (req, res) => {
    console.log(req)
    const {currentPassword , newPassword} = req.body;

    await authServices.changePassword(req.user.id, currentPassword, newPassword);
    success(res, 200, "Password changed successfully");
}