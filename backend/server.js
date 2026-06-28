require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Home
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/stocks", require("./routes/stockRoutes"));
app.use("/api/portfolio", require("./routes/portfolioRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});