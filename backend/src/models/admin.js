// const mongoose = require("mongoose");

// const adminModel = new mongoose.Schema(
//     {
//         username: {
//             type: String,
//             required: true,
//             unique: true,
//             trim: true
//         },

//         password: {
//             type: String,
//             required: true
//         },

//         role: {
//             type: String,
//             required: true
//         }
//     },
//     {
//         timestamps: true
//     }
// );

// module.exports = mongoose.model("admin", adminModel);

const mongoose = require("mongoose");

const adminModel = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            required: true,
            enum: ["admin", "super_admin"]
        },

        name: {
            type: String,
            trim: true,
            default: ""
        },

        email: {
            type: String,
            trim: true,
            lowercase: true,
            default: ""
        },

        phone: {
            type: String,
            trim: true,
            default: ""
        },

        avatarText: {
            type: String,
            trim: true,
            maxlength: 2,
            default: "A"
        },

        avatarColor: {
            type: String,
            default: "from-[#FF9933] to-[#ff7a00]"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("admin", adminModel);