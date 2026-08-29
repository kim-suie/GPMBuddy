
const express = require("express");

const router = express.Router();

const facultyControllers = require("../controllers/facultyController");

const authenticate = require("../middleware/authenticateMiddlewares");

// Get all faculty
router.get("/", facultyControllers.getFaculty);

// Get faculty by ID
router.get("/id/:id", facultyControllers.getFacultyById);

// Create faculty
router.post("/", authenticate, facultyControllers.createFaculty);

// Update faculty
router.put("/:id", authenticate, facultyControllers.updateFaculty);

// Delete faculty
router.delete("/:id", authenticate, facultyControllers.deleteFaculty);

module.exports = router;
