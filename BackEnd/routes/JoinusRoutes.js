const express = require("express");
const router = express.Router();
const { submitApplication } = require("../controllers/joinusController");

router.post("/", submitApplication);

module.exports = router;
