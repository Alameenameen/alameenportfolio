require("dotenv").config();
const mongoose = require("mongoose");
const Video = require("./models/Video");
const Project = require("./models/Project");
const { videos, projects } = require("./data/seedData");

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌ No MONGODB_URI set in .env — add one before seeding.");
    process.exit(1);
  }

  await mongoose.connect(uri);
  console.log("✅ Connected to MongoDB");

  await Video.deleteMany({});
  await Project.deleteMany({});
  console.log("🧹 Cleared existing videos and projects");

  await Video.insertMany(videos);
  await Project.insertMany(projects);
  console.log(`🌱 Seeded ${videos.length} videos and ${projects.length} projects`);

  await mongoose.disconnect();
  console.log("✅ Done — disconnected from MongoDB");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err.message);
  process.exit(1);
});
