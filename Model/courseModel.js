const mongoose = require('mongoose');
const courseScheme = new mongoose.Schema({
    courseName : String,
    fees : Number,
    duration : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', courseScheme);