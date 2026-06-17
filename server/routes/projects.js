const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

// GET /api/projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: 1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to load projects" });
  }
});

module.exports = router;
