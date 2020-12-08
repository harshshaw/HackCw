const mongoose = require('mongoose')

const studentUploadSchema = new mongoose.Schema({
    name : { type : String},
    rollNumber : { type : String},
    className : { type : String},
    subject : { type : String},
    email : { type : String},
    teacherID : { type : String},
    pdfID : { type : String},
    pdffilename : { type : String}
})

module.exports = mongoose.model('uploaddetails',studentUploadSchema)