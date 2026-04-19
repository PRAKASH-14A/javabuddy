const mongoose = require("mongoose");

// Flexible schema to store any JSON structure for a topic
const contentSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: [true, "Topic key is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    label: {
      type: String,
      required: [true, "Topic label is required"],
    },
    data: {
      type: mongoose.Schema.Types.Mixed, // Accepts any JSON structure
      required: [true, "Content data is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Content", contentSchema);
