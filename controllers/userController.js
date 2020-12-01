const jwt = require('jsonwebtoken');
const User = require('../models/user')

const maxAge = 3 * 24 * 60 * 60;

const create_token = (id) => {
    return jwt.sign({id}, 'Hack CW',{
        expiresIn: maxAge
    })
}

const handleError =(err)=>{
    console.log(err.code)
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

module.exports.signup_post = async (req,res)=> {
    const {email,password} = req.body;
    console.log(req.body)
    try{
        const user = await User.create({email,password})
        const token = create_token(user._id)
        res.cookie('jwt', token,{httpOnly:true, maxAge: maxAge*1000})
        res.status(201).json({userID : user._id, token})
    }catch(err){
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
        res.status(201).json({userID: user._id, token})
    }catch(err){
        console.log(err.message)
        const errors = handleError(err)
        res.status(400).json({ errors });
    }
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
  }