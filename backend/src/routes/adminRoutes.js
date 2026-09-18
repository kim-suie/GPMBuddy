const express = require("express");

const router = express.Router();

const adminControllers = require("../controllers/adminControllers");

const authenticate = require("../middleware/authenticateMiddlewares");
const requireSuperAdmin = require("../middleware/requireSuperAdmin");

router.use(authenticate);

// Dashboard
router.get("/dashboard", adminControllers.getDashboard);

// Collections
router.get("/collections", adminControllers.getCollections);
router.post("/collections", adminControllers.createCollection);
router.get("/collections/:collection", adminControllers.getCollectionData);
router.post("/collections/:collection", adminControllers.createDocument);
router.patch("/collections/:collection/:id", adminControllers.updateDocument);
router.delete("/collections/:collection/:id", adminControllers.deleteDocument);

// Profile
router.get("/profile", adminControllers.getProfile);
router.patch("/profile", adminControllers.updateProfile);

// Manage admins - SUPERADMIN ONLY
router.get(
    "/admins",
    requireSuperAdmin,
    adminControllers.getAllAdmins
);

router.post(
    "/admins",
    requireSuperAdmin,
    adminControllers.createAdmin
);

router.patch(
    "/admins/:id",
    requireSuperAdmin,
    adminControllers.updateAdmin
);

router.delete(
    "/admins/:id",
    requireSuperAdmin,
    adminControllers.deleteAdmin
);

module.exports = router;