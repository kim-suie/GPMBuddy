const express = require("express");
const router = express.Router();

const facilityControllers = require("../controllers/facilityControllers");
const authenticate = require("../middleware/authenticateMiddlewares");
const { createMultiImageUploader, MAX_FACILITY_IMAGES } = require("../middleware/uploadMiddleware");

const uploadFacilityImages = createMultiImageUploader("images", MAX_FACILITY_IMAGES);


router.get("/", facilityControllers.getFacilities );
router.get("/search/", facilityControllers.searchFacilities );
router.get("/department/:departmentId/", facilityControllers.getDepartmentFacilities );
router.get("/:id/images/:index", facilityControllers.getFacilityImage );
router.get("/:id", facilityControllers.getFacilityById );
router.post("/create/", authenticate, uploadFacilityImages, facilityControllers.createFacility);
router.put("/update/:id", authenticate, uploadFacilityImages, facilityControllers.updateFacility);
router.delete("/delete/:id", authenticate, facilityControllers.deleteFacility);

module.exports = router;