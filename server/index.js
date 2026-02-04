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
app.use(cors());

// routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
