const express = require("express");
const router = express.Router();
const ContactModel = require("../models/Contact");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// ─────────────────────────────────────────────
// @route   POST /api/contacts
// @desc    Submit a contact form message
// @access  Public (no auth needed for contact form)
// ─────────────────────────────────────────────
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, subject, and message are required",
      });
    }

    const contact = await ContactModel.create({
      name,
      email,
      phone: phone || "",
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message received! We will get back to you soon.",
      contact,
    });
  } catch (error) {
    console.error("Contact submit error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Your message could not be sent.",
    });
  }
});

// ─────────────────────────────────────────────
// @route   GET /api/contacts
// @desc    Get all contact messages (admin only)
// @access  Protected + Admin
// ─────────────────────────────────────────────
router.get("/", protect, adminOnly, async (req, res) => {
  try {
    const contacts = await ContactModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
