const express = require("express");
const router = express.Router();



const authControllers = require("../controllers/authControllers");
const authenticate = require("../middleware/authenticateMiddlewares");

router.post("/login", authControllers.login);
router.get("/me", authenticate, authControllers.getCurrentAdmin);
router.post("/logout", authenticate, authControllers.logout);
router.patch("/change-password", authenticate, authControllers.changePassword);

//SIGNIN
router.post("/signup", (req, res) => {
  res.json({
    message: "Signup route working",
  });
});

//LOGIN
router.post("/login", (req, res) => {
  res.json({
    message: "Login route working",
  });
});

// LOGOUT
router.post("/logout", (req, res) => {
  res.json({
    message: "Logout successful",
  });
});
router.post("/logout", (req, res) => {
  res.json({
    message: "Logout successful",
  });
});

//CHANGE PASSWORD
router.put("/change-password", async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Check current password
    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Current password is incorrect",
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Save new password
    user.password = hashedPassword;
    await user.save();

    res.json({
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to change password",
    });
  }
});


module.exports = router;