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

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
