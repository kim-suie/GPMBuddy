const express = require("express");
const router = express.Router();

const facilityControllers = require("../controllers/facilityControllers");
const authenticate = require("../middleware/authenticateMiddlewares");


router.get("/", facilityControllers.getFacilities );
router.get("/search/", facilityControllers.searchFacilities );
router.get("/department/:departmentId/", facilityControllers.getDepartmentFacilities );
router.get("/:id", facilityControllers.getFacilityById );
router.post("/create/", authenticate, facilityControllers.createFacility);
router.put("/update/:id", authenticate, facilityControllers.updateFacility);
router.delete("/delete/:id", authenticate, facilityControllers.deleteFacility);

module.exports = router;