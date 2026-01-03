const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  name: String,
  age:Number,
  class: {
    type: String,
    default: "10th"
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }
],

}, {
  timestamps: true
}
);

module.exports = mongoose.model('Student', studentSchema);