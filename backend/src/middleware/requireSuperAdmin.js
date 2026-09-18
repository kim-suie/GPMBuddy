const ApiError = require("../utils/ApiError");

const requireSuperAdmin = (req, res, next) => {
    if (req.user?.role !== "super_admin") {
        throw new ApiError(403, "Superadmin access required");
    }

    next();
};

module.exports = requireSuperAdmin;