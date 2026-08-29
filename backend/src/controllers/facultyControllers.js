
const Faculty = require("../models/faculty");

// Get all faculty
exports.getFaculty = async (req, res, next) => {
  try {
    const faculty = await Faculty.find().sort({ name: 1 });

    res.status(200).json({
      success: true,
      message: "Faculty fetched successfully",
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};

// Get faculty by ID
exports.getFacultyById = async (req, res, next) => {
  try {
    const faculty = await Faculty.findById(req.params.id);

    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: "Faculty not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Faculty fetched successfully",
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};

// Create faculty
exports.createFaculty = async (req, res, next) => {
  try {
    const faculty = await Faculty.create({
      name: req.body.name,
      department: req.body.department,
      designation: req.body.designation,
      email: req.body.email,
      phone: req.body.phone,
    });

    res.status(201).json({
      success: true,
      message: "Faculty created successfully",
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};

// Update faculty
exports.updateFaculty = async (req, res, next) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        department: req.body.department,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: "Faculty not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Faculty updated successfully",
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};

// Delete faculty
exports.deleteFaculty = async (req, res, next) => {
  try {
    const faculty = await Faculty.findByIdAndDelete(req.params.id);

    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: "Faculty not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Faculty deleted successfully",
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};
