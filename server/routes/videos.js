const express = require("express");
const Video = require("../models/Video");

const router = express.Router();

// GET /api/videos
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find().sort({ order: 1, createdAt: 1 });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: "Failed to load videos" });
  }
});

module.exports = router;
