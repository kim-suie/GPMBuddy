const mongoose = require("mongoose");

const aboutUsModel = new mongoose.Schema(
  {
    history: {
      type: String,
      required: true,
      trim: true,
    },

    vision: {
      type: String,
      required: true,
      trim: true,
    },

    mission: [
          {
            type: String,
            required: true,
            trim: true
          },
    ],

    po: [
          {
            type: String,
            required: true,
            trim: true
          },
    ],

    principalMessage: {
      type: String,
      required: true,
      trim: true,
    },

    principal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "faculty",
      required: true,
    },

    affiliation: {
      type: String,
      required: true,
      trim: true,
    },


    accreditations: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },

        details: {
          type: String,
          trim: true,
        },
      },
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("aboutUs", aboutUsModel);