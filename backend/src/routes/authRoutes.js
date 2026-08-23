const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/authControllers");
const authenticate = require("../middleware/authenticateMiddlewares");

router.post("/login", authControllers.login);
router.get("/me", authenticate, authControllers.getCurrentAdmin);
router.post("/logout", authenticate, authControllers.logout);
router.patch("/change-password", authenticate, authControllers.changePassword);


module.exports = router;