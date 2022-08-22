const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/", (req, res) => {
  res.send("Here you go");
});

module.exports = router;
