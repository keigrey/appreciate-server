const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.post("/new", userController.addUser);
router.post("/login", userController.loginUser);

module.exports = router;
