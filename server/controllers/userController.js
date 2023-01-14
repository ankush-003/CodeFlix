// User model
const User = require('../models/userModel')
// JSON Web Token
const jwt = require('jsonwebtoken');

//create and assign a token
const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.TOKEN_SECRET, {
        expiresIn: '1d'
    })
}
// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.login(email, password);
        // create token
        const token = createToken(user._id);
        res.status(200).json({email, token});
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

// signup user

const signupUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.signup(email, password);
        // create token
        const token = createToken(user._id);
        res.status(201).json({email, token});
    } catch(error) {
        res.status(400).json({error: error.message});
    }

}

module.exports = {
    loginUser,
    signupUser
}