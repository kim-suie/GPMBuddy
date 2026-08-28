const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

const Admins = require("../models/admin");
const jwt = require("../utils/jwtUtils");
const ApiError = require("../utils/ApiError");


exports.login = async (username, password, role) => {
    const admin = await Admins.findOne({ username : username, role : role});
    
    if(!admin){
        throw new ApiError(401,"Invalid credentials");
    }
    
    const passwordMatched = await bcrypt.compare(password, admin.password);

    if(!passwordMatched){
        throw new ApiError(401,"Invalid credentials");
    }

    const token = jwt.generateToken(admin);

    return {
        token,
        admin : {
        id : admin._id,
        username : admin.username,
        role : admin.role
    }}

}

exports.changePassword = async (adminId, currentPassword, newPassword) => {
    const admin = await Admins.findById(adminId);
    
    if(!admin){
        throw new ApiError(401,"Invalid credentials");
    }
    console.log(admin.password)
    const isCurrentPasswordCorrect = await bcrypt.compare(currentPassword, admin.password);

    if(!isCurrentPasswordCorrect){
        throw new ApiError(401,"Invalid credentials");
    }

    if(currentPassword === newPassword){
        throw new ApiError(400, "New password must be different from current password");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    admin.password = hashedPassword;
    await admin.save();
}