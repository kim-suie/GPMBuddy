const express = require("express");
const router = express.Router();

const adminControllers = require("../controllers/adminControllers");
const authenticate = require("../middleware/authenticateMiddlewares");
const isSuperAdmin = require("../middleware/authorizeSuperAdminMiddlewares");

router.get("/", authenticate, isSuperAdmin, adminControllers.getAdmins);

router.post("/create", authenticate, isSuperAdmin, adminControllers.createAdmin);

router.put("/update/:id", authenticate, isSuperAdmin, adminControllers.updateAdmin);

router.delete("/delete/:id", authenticate, isSuperAdmin, adminControllers.deleteAdmin); 

module.exports= router;