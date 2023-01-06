// User model
const User = require('../models/userModel')

// login user
const loginUser = async (req, res) => {
    res.json({'msg': 'login user',
    'user': req.body
})}

// signup user

const signupUser = async (req, res) => {
    res.json({'msg': 'signup user',
    'user': req.body
})}

module.exports = {
    loginUser,
    signupUser
}