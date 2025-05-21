const express = require("express");
const router = express.Router();
const { getDashboardStats } = require("../controllers/StatsController");
const Contact = require("../models/Contact");

// مسار للإحصائيات
router.get("/", getDashboardStats);

module.exports = router;
