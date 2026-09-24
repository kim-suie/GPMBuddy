const express = require("express");
const router = express.Router();
const facilityControllers = require("../controllers/facilityControllers");

router.post("/create/", facilityControllers.createFacility);

router.get("/", facilityControllers.getFacilities );

router.get("/search/", facilityControllers.searchFacilities );

router.get("/department/:departmentId/", facilityControllers.getDepartmentFacilities );

router.get("/:id", facilityControllers.getFacilityById );

router.put("/:id", facilityControllers.updateFacility);

router.delete("/:id", facilityControllers.deleteFacility);


module.exports = router;