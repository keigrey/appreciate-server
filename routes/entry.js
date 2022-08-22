const express = require("express");
const router = express.Router();
const entryController = require("../controller/entry");

router.post("/", entryController.addEntry);

module.exports = router;
