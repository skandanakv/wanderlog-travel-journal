import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from "./routes/auth.js";
import memoryRoutes from "./routes/memories.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;

// ✅ Apply CORS first
app.use(cors({
  origin: "http://localhost:3000", // React frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ✅ Log incoming origins for debugging (optional)
app.use((req, res, next) => {
  console.log("🛫 Request from:", req.headers.origin);
  next();
});

// ✅ Then parse incoming JSON bodies
app.use(express.json());
app.use(bodyParser.json());


app.use("/uploads", express.static("uploads"));



// ✅ Routes
app.use("/api", authRoutes);
app.use("/api/memories", memoryRoutes);

// ✅ Test route from main server file
app.get("/api/test-direct", (req, res) => {
  res.send("✅ This came directly from index.js");
});

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");

    // You can add direct test routes inside the DB success block too
    app.get("/direct-test", (req, res) => {
      console.log("🚨 HIT: /direct-test");
      res.send("✅ Direct route from index.js is working!");
    });

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
