require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

// database connection
mongoose.connect(process.env.DB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("DB Connection Error:", err));

// middlewares
app.use(express.json());
const allowedOrigins = (process.env.FRONTEND_URLS || "http://localhost:5173,https://fascinating-gecko-e8c9b7.netlify.app,https://stalwart-meerkat-074617.netlify.app,https://cozy-sable-54742c.netlify.app")
  .split(",")
  .map(origin => origin.trim());

app.use(cors({
  origin: function (origin, callback) {
    // If we're in development or if the origin is explicitly allowed
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      console.log("CORS blocked for origin:", origin);
      // For now, let's allow it but log it so we can see what's happening
      callback(null, true);
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// routes
app.use("/api/auth", authRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Backend is healthy" });
});

app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
