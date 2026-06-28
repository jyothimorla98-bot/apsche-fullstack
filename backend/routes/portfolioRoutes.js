const express = require("express");
const router = express.Router();

console.log("✅ portfolioRoutes.js loaded");

router.get("/", (req, res) => {
  res.json({ message: "Portfolio GET works" });
});

router.post("/", (req, res) => {
  res.json({
    message: "Portfolio POST works",
    body: req.body,
  });
});

module.exports = router;