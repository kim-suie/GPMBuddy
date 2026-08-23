// models/faqModel.js

const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Question is required"],
      trim: true,
    },

    answer: {
      type: String,
      required: [true, "Answer is required"],
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },

    keywords: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("faq", faqSchema);

/* =====================================================
   SAMPLE DOCUMENT
=====================================================

{
  "id": 1,
  "question": "How can I apply for hostel?",
  "answer": "Visit the hostel office and submit the application form along with the required documents.",
  "category": "Hostel",
  "keywords": [
    "Hostel",
    "Apply",
    "Admission"
  ]
}

*/