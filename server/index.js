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
const allowedOrigins = (process.env.FRONTEND_URLS || "http://localhost:5173,https://fascinating-gecko-e8c9b7.netlify.app,https://stalwart-meerkat-074617.netlify.app,https://cozy-sable-54742c.netlify.app").split(",");
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
