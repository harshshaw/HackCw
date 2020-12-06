const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const {isEmail} = require('validator')




const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please enter your name']
    }, 
    school: {
        type: String,
        required: [true,'Please enter your school name']
    },
    class: {
        type: String,
        required: [true,'Please enter your class']
    },
    subject: {
        type: String,
        required: [true,'Please enter your subject']
    },
    email: {
        type: String,
        required: [true,'Please enter a valid email'],
        unique: true,
        lowercase: true,
        validate: [isEmail,'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true,'Please enter a password'],
        minlength: [6, 'Please enter a password of min length 6']
    }
})

teacherSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
    next();
})

teacherSchema.statics.login = async function(email,password){
    const user = await this.findOne({email})
    if (user){
        const auth = await bcrypt.compare(password,user.password)
        if(auth){
            return user
        }
        throw Error('Invalid password')
    }
    throw Error('Invalid email')
}

module.exports = mongoose.model('teacher', teacherSchema)