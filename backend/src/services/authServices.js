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