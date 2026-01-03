const express = require('express');
const router = express.Router();

const courseModel = require('../Model/courseModel');

router.post('/add-course', async (req, res) => {

  try {
    const { courseName, fees, duration } = req.body;

    const newCourse = new courseModel({
      courseName: courseName,
      fees: fees,
      duration: duration
    });

    await newCourse.save();

    res.status(201).send("Course added successfully");
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error");
    };
});

module.exports = router;