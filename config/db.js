const mongoose = require('mongoose');

const connectDB = async () => {
mongoose.connect("mongodb://localhost:27017/testDB")
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB", err);
});
};
module.exports = connectDB;