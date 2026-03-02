// Responsibilities: Define routes related to authentication (signup, login, etc.) and link them to the appropriate controller functions.

const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);



module.exports = router;