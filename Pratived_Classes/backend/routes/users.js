const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET all users
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM users ORDER BY id"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch users",
    });
  }
});

// CREATE user
router.post("/", async (req, res) => {
  try {
    const { clerk_user_id, name, email, role } = req.body;

    const result = await pool.query(
      `INSERT INTO users
       (clerk_user_id, name, email, role)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [clerk_user_id, name, email, role || "student"]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to create user",
    });
  }
});

module.exports = router;