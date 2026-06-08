require("dotenv").config();

const express = require("express");
const cors = require("cors");
const pool = require("./db");
const userRoutes = require("./routes/users");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      success: true,
      message: "Pratived Classes API Running",
      databaseTime: result.rows[0].now,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});