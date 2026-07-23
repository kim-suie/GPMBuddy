const success = (res, code, message, data) => {
    res.status(code).json({
        success : true,
        message : message,
        data 
    });
}
module.exports = success;