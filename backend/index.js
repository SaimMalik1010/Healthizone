const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();


const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

console.log("Starting server...");
console.log("Current folder:", process.cwd());

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
});

server.on("error", (err) => {
  console.error("Server failed to start:", err);
});