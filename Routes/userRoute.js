const express = require('express');
const app = express();
const router = express.Router();
const User = require('../Model/userModel');
const Student = require('../Model/studentModel');

router.post('/add-user', async (req, res) => {
  try {
    const { Name, age, email } = req.body;


    const newUser = await new User({
      name: Name,
      age: age,
      email: email
    });
    await newUser.save();


    console.log(newUser);
    res.status(201).send("user created successfully");

  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
});

router.get("/getUsers", async (req, res) => {
const page = parseInt(req.query.page) || 2;
const limit = parseInt(req.query.limit) || 10;
const skip = (page - 1) * limit;


  const getStudents = await Student.find()
  .populate('courses')
    .skip(skip)
    .limit(limit)
   
  const totalStudents = await Student.countDocuments();


  res.status(200).send({
    students: getStudents,
    pagination: {
      currentPage: page,
      perPage: limit,
      totalStudents: totalStudents,
      totalPages: Math.ceil(totalStudents / limit)
    }
  });
})

module.exports = router;


//mpongoose populate();