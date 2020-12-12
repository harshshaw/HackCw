const mongoose = require('mongoose')


const studentScoreSchema = new mongoose.Schema({
    subject : { type : String},
    score : { type : String},
    teacherID : { type : String},
    studentID: { type : String},
})

module.exports = mongoose.model('scores',studentScoreSchema)