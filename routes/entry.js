const express = require("express");
const router = express.Router();
const entryController = require("../controller/entry");

router.post("/", entryController.authenticateToken, entryController.addEntry);
router.get(
  "/",
  entryController.authenticateToken,
  entryController.getAllEntries
);

module.exports = router;
