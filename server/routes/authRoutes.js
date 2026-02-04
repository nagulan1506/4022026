const express = require("express");
const router = express.Router();
const { forgotPassword, resetPassword } = require("../controllers/authController");

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:userId/:token", resetPassword);

module.exports = router;
