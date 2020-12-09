const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const User = require('../models/teacher')
const Studentupload = require('../models/studentupload')
const StudentScore = require('../models/studentScore')
const Grid = require('gridfs-stream')
const conn = require('../db/conn')


const maxAge = 3 * 24 * 60 * 60;

const create_token = (id) => {
    return jwt.sign({id}, 'Hack CW',{
        expiresIn: maxAge
    })
}

const handleError =(err)=>{
    // console.log(err.code)
    let errors = { email: '', password: '' };
    if(err.message === 'Invalid password'){
        errors.password = 'Invalid password'
    }
    if(err.message === 'Invalid email'){
        errors.email = 'Invalid email'
    }
    if(err.code ===11000){
        errors.email = 'Email already exists'
        return errors
    }
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
          console.log(properties);
          errors[properties.path] = properties.message;
        });
      }
    return errors
}


// initialize gfs 
let gfs;
conn.once('open', () => {
    gfs = Grid(conn.db,mongoose.mongo)
    gfs.collection('pdfs')
})

module.exports.signup_post = async (req,res)=> {
    // console.log(req.body)
    // const {name,rollnumber,school,class,email,password} = req.body;
    
    try{
        const user = await User.create(req.body)
        const token = create_token(user._id)
        res.cookie('jwt', token,{httpOnly:true, maxAge: maxAge*1000})
        res.status(201).json({
            userID: user._id,
            name: user.name,
            rollnumber:user.rollnumber,
            school:user.school,
            class:user.class ,
            useremail: user.email,
            token
        })
    }catch(err){
        console.log(err.message)
        const errors = handleError(err)
        res.status(400).json({ errors });
    }
}

module.exports.login_post = async (req,res)=> {
    const {email,password} = req.body;
    try{
        const user = await User.login(email,password)
        const token = create_token(user._id)
        res.cookie('jwt', token,{httpOnly:true, maxAge: maxAge*1000})
        res.status(200).json({
            userID: user._id,
            name: user.name,
            rollnumber:user.rollnumber,
            school:user.school,
            class:user.class ,
            useremail: user.email,
            token
        })
    }catch(err){
        // console.log(err.message)
        const errors = handleError(err)
        res.status(400).json({ errors });
    }
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
  }

module.exports.getallfiles = async (req,res)=>{
    const pdfname = []
    const pdf = []
    try {
        const studentUpload = await Studentupload.find( {teacherID: req.params.id})
        Object.values(studentUpload).forEach(({name,subject,teacherID,studentID,pdfID,pdffilename})=>{
        pdfname.push({name,subject,teacherID,studentID,pdfID,pdffilename})
        })
        res.json(pdfname)
    } catch (error) {
        console.log(error)
        res.status(404).json({error})
    }
}

module.exports.getfiles = async (req,res) => {
    await gfs.files.findOne({filename: req.params.filename},(err,file)=>{
        if(!file || file.length === 0 ){
          return res.status(404).json({
            err: 'No files found'
          })
        }
        const readStream = gfs.createReadStream(file.filename)
        readStream.pipe(res)
    })
}

module.exports.postScore = async(req, res)=>{
    // const {} = req.body
    // console.log(req.body)
    try {
        const score = await StudentScore.create(req.body)
        // console.log(score)
        res.status(201).send('Hogaya')
    } catch (error) {
        res.status(500).json({error})
    }
}