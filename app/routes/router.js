const express = require("express");
const router = express.Router();
const { news, signLang } = require("../controllers/activity_controller.js");

router.get("/article", news);
router.get("/activity", signLang);

module.exports = router;