const express = require("express");
const router = express.Router();

const subjectControllers = require("../controllers/subjectControllers");
const authenticate = require("../middleware/authenticateMiddlewares");


router.get("/", subjectControllers.getSubjects );
router.get("/search/", subjectControllers.searchSubjects );
router.get("/getSubjectTypes", subjectControllers.getSubjectTypes );
router.get("/getDepartmentNames", subjectControllers.getDepartmentNames );
router.get("/:id", subjectControllers.getSubjectById );
router.post("/create/", authenticate, subjectControllers.createSubject);
router.put("/update/:id", authenticate, subjectControllers.updateSubject);
router.delete("/delete/:id", authenticate, subjectControllers.deleteSubject);

module.exports = router;