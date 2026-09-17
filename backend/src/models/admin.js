const mongoose = require("mongoose");

const adminModel = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        
        designation: {
            type: String,
            required: true
        },

        department: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("admin", adminModel);