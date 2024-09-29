const express = require("express");
const router = express.Router();
const { sendOTP } = require("../controller/userController.js");
router.post("/sendOtp", sendOTP);
exports.router = router;
