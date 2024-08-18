const express = require('express');
const Year = require('../models/year');  // Import Year model
const router = express.Router();

// Create a new year with teams and tasks
router.post('/year', async (req, res) => {
  try {
    const { year, teams } = req.body;
    const newYear = new Year({ year, teams });
    const savedYear = await newYear.save();
    res.status(201).json(savedYear);
  } catch (error) {
    res.status(500).json({ message: 'Error creating year', error });
  }
});

// Get all years with teams and tasks
router.get('/years', async (req, res) => {
  try {
    const years = await Year.find();
    res.status(200).json(years);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching years', error });
  }
});

// Export the router
module.exports = router;
