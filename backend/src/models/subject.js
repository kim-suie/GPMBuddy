const mongoose = require("mongoose");

const subjectModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // Plain department name strings — no reference to the Department
    // collection, no verification. Admins pick from whatever names
    // they use consistently (e.g. "CSE", "Mechanical Engineering").
    // Empty array = common to every department.
    departments: {
      type: [String],
      default: [],
    },

    // A subject can have more than one type at once (e.g. a subject
    // with both a theory and a practical/tutorial component).
    type: {
      type: [String],
      default: [],
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    // One entry per unit/topic.
    syllabus: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

subjectModel.index({ name: 1 });
subjectModel.index({ departments: 1 });
subjectModel.index({ type: 1 });

module.exports = mongoose.model("subject", subjectModel);