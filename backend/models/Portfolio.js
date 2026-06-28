const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Portfolio route is working" });
});

router.post("/", (req, res) => {
  res.json({ message: "POST Portfolio route is working" });
});

module.exports = router;