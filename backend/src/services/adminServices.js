const admin = require("../models/admin");
const bcrypt = require("bcryptjs");

exports.getAdmins = async () => {
    return await admin.find();
}

exports.createAdmin = async (body) => {
    return await admin.create({
        username : body.username,
        name : body.name,
        designation : body.designation,
        department : body.department,
        password : await bcrypt.hash(body.password, 12),
        role : body.role
    })
}

exports.updateAdmin = async (req) => {
    return await admin.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});
}

exports.deleteAdmin = async (params) => {
    return await admin.findByIdAndDelete(params.id);
}