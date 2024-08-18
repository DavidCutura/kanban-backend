const express = require('express');
const mongoose = require('mongoose');
const Year = require('./models/Year'); // Assuming the model is in models/Year.js
const app = express();

app.use(express.json()); // Middleware to parse JSON

// Example route to create a new year with teams and tasks
app.post('/api/year', async (req, res) => {
  try {
    const { year, teams } = req.body;

    const newYear = new Year({
      year,
      teams
    });

    const savedYear = await newYear.save();
    res.status(201).json(savedYear);
  } catch (error) {
    res.status(500).json({ message: 'Error creating year', error });
  }
});

// Example route to get all years with teams and tasks
app.get('/api/years', async (req, res) => {
  try {
    const years = await Year.find();
    res.status(200).json(years);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching years', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
