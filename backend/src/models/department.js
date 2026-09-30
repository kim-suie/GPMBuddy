const mongoose = require("mongoose");

const departmentModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    established: {
      type: Number,
    },

    intake: {
      type: Number,
    },

    headOfDepartment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faculty",
    },

    vision: {
      type: String,
      trim: true,
    },

    mission: [
        {
            description: {
            type: String,
            required: true,
            trim: true,
            },
        },
    ],

    peo: [
        {
            description: {
            type: String,
            required: true,
            trim: true,
            },
        },
    ],

    po: [
        {
            description: {
            type: String,
            required: true,
            trim: true,
            },
        },
    ],

    pso: [
        {
            description: {
            type: String,
            required: true,
            trim: true,
            },
        },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("department", departmentModel);