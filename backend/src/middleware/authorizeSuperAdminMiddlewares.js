const ApiError = require("../utils/ApiError");

function isSuperAdmin(req, res, next){
    console.log(req.user.role);
    if(req.user.role !== "super_admin"){
        throw new ApiError(403,"Only super admin can perform this operation");
    }

    next();
}

module.exports = isSuperAdmin;