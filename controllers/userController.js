const jwt = require('jsonwebtoken');
const User = require('../models/user')
const Upload = require('../models/studentupload')
const StudentScore = require('../models/studentScore')
const maxAge = 3 * 24 * 60 * 60;

const create_token = (id) => {
    return jwt.sign({ id }, 'Hack CW', {
        expiresIn: maxAge
    })
}

const handleError = (err) => {
    // console.log(err.code)
    let errors = { email: '', password: '' };
    if (err.message === 'Invalid password') {
        errors.password = 'Invalid password'
    }
    if (err.message === 'Invalid email') {
        errors.email = 'Invalid email'
    }
    if (err.code === 11000) {
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

module.exports.signup_post = async (req, res) => {
    try {
        const user = await User.create(req.body)
        const token = create_token(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ 
            userID: user._id,
            name: user.name,
            rollnumber:user.rollnumber,
            school:user.school,
            class:user.class ,
            useremail: user.email,
            token
        })
    } catch (err) {
        const errors = handleError(err)
        res.status(400).json({ errors });
    }
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)
        const token = create_token(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ 
            userID: user._id,
            name: user.name,
            rollnumber:user.rollnumber,
            school:user.school,
            class:user.class ,
            useremail: user.email,
            token 
        })
    } catch (err) {
        // console.log(err.message)
        const errors = handleError(err)
        res.status(400).json({ errors });
    }
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}

module.exports.upload_post = async (req, res) => {
    // console.log(req.file)
    // console.log(" ")
    // console.log(req.body)
    const { name, rollNumber, className,email,teacherID,studentID, subject } = req.body
    try {
        const studentUploadDetails = await Upload.create({
            name,
            rollNumber,
            className,
            subject,
            email,
            teacherID,
            studentID,
            pdfID : req.file.id,
            pdffilename : req.file.filename
        })
        res.status(201).json(studentUploadDetails)
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports.getscores = async (req, res) => {
    try {
        const scores = await StudentScore.find({studentID : req.params.id})
        res.status(200).json(scores)
    } catch (error) {
        res.status(404).json(error)
    }
}


// module.exports.getfiles = (req,res)=>{
//     gfs.files.findOne({filename: req.params.filename},(err,file)=>{
//       // if(!file || file.length === 0 ){
//       //   return res.status(404).json({
//       //     err: 'No files found'
//       //   })
//       // }
//       const readStream = gfs.createReadStream(file.filename)
//       readStream.pipe(res)
//     })
//   }