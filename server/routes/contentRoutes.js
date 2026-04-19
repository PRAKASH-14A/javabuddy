const express = require("express");
const router = express.Router();
const Content = require("../models/Content");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// ─────────────────────────────────────────────
// @route   GET /api/content
// @desc    Get list of all available topics
// @access  Protected
// ─────────────────────────────────────────────
router.get("/", protect, async (req, res) => {
  try {
    const topics = await Content.find({}, "topic label createdAt").sort({
      createdAt: 1,
    });

    res.status(200).json({
      success: true,
      count: topics.length,
      topics,
    });
  } catch (error) {
    console.error("Get topics error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching topics",
    });
  }
});

// ─────────────────────────────────────────────
// @route   GET /api/content/:topic
// @desc    Get content data for a specific topic
// @access  Protected
// ─────────────────────────────────────────────
router.get("/:topic", protect, async (req, res) => {
  try {
    const { topic } = req.params;

    const content = await Content.findOne({ topic: topic.toLowerCase() });

    if (!content) {
      return res.status(404).json({
        success: false,
        message: `No content found for topic: "${topic}"`,
      });
    }

    res.status(200).json({
      success: true,
      topic: content.topic,
      label: content.label,
      data: content.data,
    });
  } catch (error) {
    console.error("Get content error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching content",
    });
  }
});

// ─────────────────────────────────────────────
// @route   POST /api/content
// @desc    Create a new content topic (Admin only)
// @access  Protected + Admin
// ─────────────────────────────────────────────
router.post("/", protect, adminOnly, async (req, res) => {
  try {
    const { topic, label, data } = req.body;

    if (!topic || !label || !data) {
      return res.status(400).json({
        success: false,
        message: "topic, label, and data are required",
      });
    }

    const existing = await Content.findOne({ topic: topic.toLowerCase() });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: `Topic "${topic}" already exists`,
      });
    }

    const content = await Content.create({ topic: topic.toLowerCase(), label, data });

    res.status(201).json({
      success: true,
      message: "Content created successfully",
      content,
    });
  } catch (error) {
    console.error("Create content error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating content",
    });
  }
});

// ─────────────────────────────────────────────
// @route   PUT /api/content/:topic
// @desc    Update content for a topic (Admin only)
// @access  Protected + Admin
// ─────────────────────────────────────────────
router.put("/:topic", protect, adminOnly, async (req, res) => {
  try {
    const { topic } = req.params;
    const { label, data } = req.body;

    const content = await Content.findOneAndUpdate(
      { topic: topic.toLowerCase() },
      { label, data },
      { new: true, runValidators: true }
    );

    if (!content) {
      return res.status(404).json({
        success: false,
        message: `Topic "${topic}" not found`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Content updated successfully",
      content,
    });
  } catch (error) {
    console.error("Update content error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating content",
    });
  }
});

module.exports = router;
