const mongoose = require("mongoose");

const facilityModel = new mongoose.Schema(
    {
        // Basic facility information
        name: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            trim: true
        },

        // Optional department reference.
        // College-level facilities such as library, hostel,
        // auditorium, etc. may not belong to any department.
        department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "department",
            default: null
        },

        // Flexible location.
        // floor and room are optional because they may not
        // apply to facilities such as hostels or sports grounds.
        location: {
            type: {
                type: String,
                enum: ["Campus", "Off-Campus"],
                required: true
            },

            place: {
                type: String,
                required: true,
                trim: true
            },

            floor: {
                type: String,
                trim: true
            },

            room: {
                type: String,
                trim: true
            }
        },

        // Operating/availability information
        availability: {
            status: {
                type: String,
                enum: [
                    "Available",
                    "Temporarily Closed",
                    "Under Maintenance"
                ],
                default: "Available"
            },

            days: {
                type: [String],
                default: []
            },

            openingTime: {
                type: String,
                trim: true
            },

            closingTime: {
                type: String,
                trim: true
            },

        },

        // Contact information
        contact: {
            phone: {
                type: String,
                trim: true
            },

            email: {
                type: String,
                trim: true
            },

            additionalInfo: {
                type: String,
                trim: true
            }
        },

        // Services/features provided by the facility
        features: {
            type: [String],
            default: []
        },

        // Person responsible for the facility
        inCharge: {
            name: {
                type: String,
                trim: true
            },

            designation: {
                type: String,
                trim: true
            },

            contact: {
                type: String,
                trim: true
            }
        },

        // Image URLs/paths
        images: {
            type: [String],
            default: []
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("facility", facilityModel);