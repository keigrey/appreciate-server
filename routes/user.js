const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.post("/new", userController.addUser);

router.post("/login", (req, res) => {
  res.send("Login User");
});

module.exports = router;
