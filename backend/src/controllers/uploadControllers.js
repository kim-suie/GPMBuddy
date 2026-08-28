
const Upload = require("../models/upload");

// Get all uploads
exports.getUploads = async (req, res, next) => {
  try {
    const uploads = await Upload.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Uploads fetched successfully",
      data: uploads,
    });
  } catch (error) {
    next(error);
  }
};

// Get upload by ID
exports.getUploadById = async (req, res, next) => {
  try {
    const upload = await Upload.findById(req.params.id);

    if (!upload) {
      return res.status(404).json({
        success: false,
        message: "Upload not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Upload fetched successfully",
      data: upload,
    });
  } catch (error) {
    next(error);
  }
};

// Create upload record
exports.createUpload = async (req, res, next) => {
  try {
    const upload = await Upload.create({
      fileName: req.body.fileName,
      fileUrl: req.body.fileUrl,
      fileType: req.body.fileType,
      uploadedBy: req.body.uploadedBy,
    });

    res.status(201).json({
      success: true,
      message: "Upload created successfully",
      data: upload,
    });
  } catch (error) {
    next(error);
  }
};

// Delete upload
exports.deleteUpload = async (req, res, next) => {
  try {
    const upload = await Upload.findByIdAndDelete(req.params.id);

    if (!upload) {
      return res.status(404).json({
        success: false,
        message: "Upload not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Upload deleted successfully",
      data: upload,
    });
  } catch (error) {
    next(error);
  }
};