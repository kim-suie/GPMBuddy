const mongoose = require("mongoose");

const departmentModel = new mongoose.Schema({
    name : String,
    code : String,
    hod : String
});

module.exports = mongoose.model("departments", departmentModel);