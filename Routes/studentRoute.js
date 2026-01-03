const express = require('express');
const router = express.Router();
const Student = require('../Model/studentModel');
const Course = require('../Model/courseModel');

router.put('/updateStudent/:name', async (req, res) => {

  const name = req.params.name;
  const updatedData = req.body;

  let updatedStudent = await Student.findOneAndUpdate(
    { name: name },
    updatedData,
    { new: true });
  await updatedStudent.save();

  console.log(updatedStudent);

  res.status(200).send({ student: updatedStudent });
});         

const students = [
  { name: "Amit", age: 15, class: "10th" },
  { name: "Rahul", age: 16, class: "11th" },
  { name: "Sneha", age: 14, class: "9th" },
  { name: "Priya", age: 15, class: "10th" },
  { name: "Vikram", age: 17, class: "12th" },
  { name: "Anjali", age: 16, class: "11th" }
]

router.post('/add-student', async (req, res) => {

  const newStudent = await Student.insertMany(students);

  // await newStudent.save();

  res.status(201).send("Student added successfully");
});

router.put('/updateStudentById/:id', async (req, res) => {



  let updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  await updatedStudent.save();

  res.status(200).send({ student: updatedStudent });
});


router.delete("/deleteStudent/:id", async (req, res) => {

  const id = req.params.id;

  const deleteStudent = await Student.findByIdAndDelete(id);


  res.status(200).json("student deleted successfullyt");


})

  
// deleteOne(), deleteMany(), findByIdAndDelete()

// student.deleteOne({name:"amit"});

router.post('/enroll', async (req, res) => {

  const { studentId, courseId } = req.body;

  const course = await Course.findById(courseId);
  const student = await Student.findById(studentId);
  
  student.courses.push(course._id);

  student.save();

  res.status(200).send({ student });
});
module.exports = router;