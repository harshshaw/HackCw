const mongoose = require('mongoose')


const studentScoreSchema = new mongoose.Schema({
    name : { type : String},
    rollNumber : { type : String},
    className : { type : String},
    subject : { type : String},
    score : { type : String},
    email : { type : String},
    teacherID : { type : String},
    studentID: { type : String},
})

module.exports = mongoose.model('scores',studentScoreSchema)