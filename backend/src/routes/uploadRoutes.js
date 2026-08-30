
const express = require("express");

const router = express.Router();

const uploadControllers = require("../controllers/uploadControllers");

const authenticate = require("../middleware/authenticateMiddlewares");

// Get all uploads
router.get("/", authenticate, uploadControllers.getUploads);

// Get upload by ID
router.get("/id/:id", authenticate, uploadControllers.getUploadById);

// Create upload record
router.post("/", authenticate, uploadControllers.createUpload);

// Delete upload
router.delete("/:id", authenticate, uploadControllers.deleteUpload);

module.exports = router;
