
const express = require("express");
const router = express.Router();

const facultyControllers = require("../controllers/facultyControllers");
const authenticate = require("../middleware/authenticateMiddlewares");

router.get("/", facultyControllers.getFaculties);
router.get("/id/:id", facultyControllers.getFacultyById);
router.post("/create/", authenticate, facultyControllers.createFaculty);
router.put("/update/:id", authenticate, facultyControllers.updateFaculty);
router.delete("/delete/:id", authenticate, facultyControllers.deleteFaculty);

module.exports = router;
