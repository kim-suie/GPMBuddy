const authServices = require("../services/authServices");
const success = require("../utils/successResponseUtil")

exports.login = async (req, res) => {
    
    const {username, password, role} = req.body;
    
    const data = await authServices.login(username, password, role);
    success(res, 200, "Login successful", data);
}