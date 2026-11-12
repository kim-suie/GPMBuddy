
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
 
    date: {
      type: Date,
      required: true,
    },

    time: {
      type: String,
      required: true,
      trim: true,
    },

    venue: {
      type: String,
      required: true,
      trim: true,
    },

    eligibility: {
      type: String,
      trim: true,
    },

    // organized by refers to the organizing body/club of the institute who is organizing/managing the event
    organizedBy: {
      type: String,
      required: true,
      trim: true,
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);