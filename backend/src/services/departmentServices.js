const department = require("../models/department");

exports.getDepartments = async () => {
    return await department.find();
}

exports.getDepartmentsById = async (params) => {
    return await department.findById(params.id);
}

exports.getDepartmentsByName = async (params) => {
    return await department.findOne({ name: params.name });
}

exports.getDepartmentsByCode = async (params) => {
    return await department.findOne({ code: params.code });
}

exports.createDepartments = async (body) => {
    return await department.create({
        name : body.name,
        code : body.code,
        hod : body.hod
    })
}

exports.updateDepartments = async (req) => {
    return await department.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});
}

exports.deleteDepartments = async (params) => {
    return await department.findByIdAndDelete(params.id);
}