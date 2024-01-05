const {model} = require('mongoose');
const UserModel = require('../models/user.models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


// user signUp
const signUp = async (req, res, next) => {
    const {fullName, email, password}= req.body;
    try {
       var userExists = await UserModel.findOne({email:email}); 
       console.log(userExists);
       if (userExists) {
        res.status(401).json({message: 'User already exists'})
        }
       else{
        const hashedPassword = bcryptjs.hashSync(password, 10);

        var newUser = new UserModel({
            email: email,
            password: hashedPassword,
            fullName: fullName
        });

        var savedUser = await newUser.save();;
        res.status(201).json({
            message:'Account created successfully👍!'});
       }
    } catch (error) {
       res.status(500).json({message:error.message}); 
    }
}

module.exports = {
    signUp
}