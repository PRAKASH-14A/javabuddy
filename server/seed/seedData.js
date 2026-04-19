/**
 * Seed Script — Imports all db.json content into MongoDB
 * Run: node seed/seedData.js
 */

require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");

const Content = require("../models/Content");
const User = require("../models/User");

// ─── Read the existing db.json ───────────────────────────────────────────────
const dbPath = path.join(__dirname, "../../backend/db.json");
const rawData = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

// ─── Map of db.json keys → human-readable labels ─────────────────────────────
const topicMeta = {
  intro: "Introduction",
  install: "Installation",
  identifier: "Identifier",
  DataType: "Data Types",
  typecasting: "Type Casting",
  variables: "Variables",
  operators: "Operators",
  flowControl: "Flow Control",
  classes: "Classes",
  methods: "Methods",
  features: "Features of Methods",
  inheritance: "Inheritance",
  methodOverloading: "Method Overloading",
  methodOverriding: "Method Overriding",
  modifiers: "Access Modifiers",
  constructors: "Constructors",
  interface: "Interface",
  blocks: "Blocks",
  objectTypeCasting: "Object Type Casting",
  factoryMethod: "Factory Method",
  singletonClass: "Singleton Class",
  dataHiding: "Data Hiding",
  abstraction: "Abstraction",
  encapsulation: "Encapsulation",
  polymorphism: "Polymorphism",
  objectClass: "Object Class",
  stringClass: "String Class",
  stringMethods: "String Class Methods",
  stringBuffer: "StringBuffer Class",
  stringBufferMethods: "StringBuffer Class Methods",
  stringBuilder: "StringBuilder Class",
  wrapperClass: "Wrapper Class",
  wrapperConstructors: "Wrapper Constructors",
  wrapperMethods: "Wrapper Utility Methods",
  autoboxing: "Autoboxing / Autounboxing",
  collectionFramework: "Collection Framework",
  list: "List",
  set: "Set",
  queue: "Queue",
  map: "Map",
  arrays: "Arrays",
  exceptionHandling: "Exception Handling",
  interviewQuestions: "Interview Questions",
};

const seedDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // ── Clear existing data ───────────────────────────────────────────────────
    await Content.deleteMany({});
    await User.deleteMany({});
    console.log("🗑️  Cleared existing Content and User collections");

    // ── Seed Content ──────────────────────────────────────────────────────────
    const contentDocs = [];
    const excludeKeys = ["users"]; // skip user data — handled separately

    for (const [key, value] of Object.entries(rawData)) {
      if (excludeKeys.includes(key)) continue;

      const label = topicMeta[key] || key;
      contentDocs.push({
        topic: key.toLowerCase(),
        label,
        data: value,
      });
    }

    if (contentDocs.length > 0) {
      await Content.insertMany(contentDocs);
      console.log(`📚 Seeded ${contentDocs.length} content topics into MongoDB:`);
      contentDocs.forEach((doc) => console.log(`   ✔ ${doc.label} (${doc.topic})`));
    }

    // ── Seed Users (with hashed passwords) ───────────────────────────────────
    if (rawData.users && rawData.users.length > 0) {
      const usersToSeed = rawData.users.map((u) => ({
        username: u.username,
        email: u.email,
        password: u.password.length < 6 ? u.password.padEnd(6, "0") : u.password, // Will be hashed by pre-save hook
      }));

      for (const userData of usersToSeed) {
        await User.create(userData); // Triggers bcrypt pre-save hook
      }
      console.log(`👤 Seeded ${rawData.users.length} users with hashed passwords:`);
      rawData.users.forEach((u) => console.log(`   ✔ ${u.username} (${u.email})`));
    }

    console.log("\n✅ Database seeded successfully!");
    console.log("─".repeat(50));
    console.log("🎯 You can now start the server with: npm run dev");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDB();
