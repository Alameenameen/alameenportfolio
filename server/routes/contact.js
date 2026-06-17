const express = require("express");
const ContactMessage = require("../models/ContactMessage");

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are all required." });
  }

  try {
    await ContactMessage.create({ name, email, message });
    res.status(201).json({ message: "Message sent — thank you! I'll get back to you soon." });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong saving your message. Please try again." });
  }
});

module.exports = router;
