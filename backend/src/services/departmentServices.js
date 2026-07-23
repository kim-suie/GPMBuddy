const departments = require("../models/departments");

exports.getDepartments = async () => {
    return await departments.find();
}

exports.getDepartmentsById = async (params) => {
    return await departments.findById(params.id);
}

exports.getDepartmentsByName = async (params) => {
    return await departments.findOne({ name: params.name });
}

exports.getDepartmentsByCode = async (params) => {
    return await departments.findOne({ code: params.code });
}

exports.createDepartments = async (body) => {
    return await departments.create({
        name : body.name,
        code : body.code,
        hod : body.hod
    })
}

exports.updateDepartments = async (req) => {
    return await departments.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});
}

exports.deleteDepartments = async (params) => {
    return await departments.findByIdAndDelete(params.id);
}