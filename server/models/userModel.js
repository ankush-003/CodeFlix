const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    password: {
        type: String,
        required: true
    }
})

// static signup method
userSchema.statics.signup = async function(email, password) {
    // validation
    if(!email || !password) {
        throw Error('Email and password are required!');
    }
    if(!validator.isEmail(email)) {
        throw Error('Email is invalid!');
    }   
    if(!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough!');
    }
    // this refers to model 
    const exists = await this.findOne({email});
    if(exists) {
        throw Error('Email already exists!');
    }

    // salt is a random string added to the password before hashing
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({email, password: hash});
    return user;
}

module.exports = mongoose.model('User', userSchema);