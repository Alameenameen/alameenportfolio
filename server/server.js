require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const videoRoutes = require("./routes/videos");
const projectRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Al Ameen portfolio API is running." });
});

app.use("/api/videos", videoRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
