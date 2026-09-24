const department = require("../models/department");
const ApiError = require("../utils/ApiError");

const escapeRegex = (value) => {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

exports.getDepartments = async () => {
    return await department.find();
}

exports.getDepartmentsById = async (params) => {
    return await department.findById(params.id);
}

exports.findDepartment = async (departmentInput) => {

    if (
        !departmentInput ||
        typeof departmentInput !== "string" ||
        !departmentInput.trim()
    ) {
        throw new ApiError(400, "Department is required!");
    }

    const value = departmentInput.trim();

    const departmentData = await department.findOne({
        $or: [
            {
                code: {
                    $regex: `^${escapeRegex(value)}$`,
                    $options: "i"
                }
            },
            {
                name: {
                    $regex: `^${escapeRegex(value)}$`,
                    $options: "i"
                }
            }
        ]
    });

    if (!departmentData) {
        throw new ApiError(404, "Department not found!");
    }

    return departmentData;
};


// exports.getDepartmentsByName = async (params) => {
//     return await department.findOne({ name: params.name });
// }

// exports.getDepartmentsByCode = async (params) => {
//     return await department.findOne({ code: params.code });
// }

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