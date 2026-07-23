const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");
const ApiError = require("../utils/ApiError");

function authenticate(req, res, next){

    const authHeader = req.headers.authorization;

    if(!authHeader){
        throw new ApiError(401,"Authorization header is missing");
    }
    
    const parts = authHeader.split(" ");

    if(parts.length !== 2 || parts[0] !== "Bearer"){
        throw new ApiError(401,"Invalid authorization header format");
    }

    const token = parts[1];

    try {

        const decoded = jwt.verify(token, jwtConfig.secret);
        req.user = decoded;
        console.log(req.user);
        next();

    } 
    catch (error) {
        throw new ApiError(401,"Invalid or expired token");
    }

}

module.exports = authenticate;