const jwt = require("jsonwebtoken");
const jwtConfig = require ("../config/jwt");

exports.generateToken = (admin) => {
    return jwt.sign(
        {
            id: admin._id,
            username: admin.username,
            role: admin.role
        },
        jwtConfig.secret,
        {
            expiresIn: jwtConfig.expiresIn
        }
    )
}