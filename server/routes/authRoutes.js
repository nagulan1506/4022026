const express = require("express");
const router = express.Router();
const { forgotPassword, resetPassword, register } = require("../controllers/authController");

router.post("/register", register);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:userId/:token", resetPassword);

module.exports = router;
