const express = require("express");
const router = express.Router();
const entryController = require("../controller/entry");

router.post("/", entryController.addEntry);
router.get("/", entryController.getAllEntries);

module.exports = router;
