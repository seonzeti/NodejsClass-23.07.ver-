const express = require("express");
const router = express.Router();

// Main Page 열기
router.get("/", (req, res) => {
  res.render("index");
});

// Join Page 열기
router.get("/join", (req, res) => {
  res.render("join");
});

module.exports = router;
