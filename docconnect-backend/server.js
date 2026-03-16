// server.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./db.js";

import doctorRoutes from "./routes/doctorRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();

// =========================
// Middleware
// =========================
app.use(cors());              // allow frontend -> backend requests
app.use(express.json());      // parse JSON bodies

// =========================
// Database
// =========================
connectDB();

// =========================
// Routes
// =========================
app.use("/api/doctors", doctorRoutes);
app.use("/api/bookings", bookingRoutes);

// Root route (health check)
app.get("/", (req, res) => {
  res.send("✅ DocConnect API is running...");
});

// =========================
// Server Start
// =========================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
