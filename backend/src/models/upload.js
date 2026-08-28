
const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
      trim: true,
    },

    fileUrl: {
      type: String,
      required: true,
      trim: true,
    },

    fileType: {
      type: String,
      required: true,
      trim: true,
    },

    uploadedBy: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Upload", uploadSchema);
