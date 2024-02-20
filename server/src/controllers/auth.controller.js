import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import User from '../models/user.schema.js'
import asyncHandler from '../services/asyncHandler.js'
import CustomError from '../services/customError.js'

// export const CookieOptions = {
//     expires: new Date(Date.now() + 1*60*60*1000),
//     httpOnly: true
// }

export const signUp = asyncHandler( async(req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        throw new CustomError("Please fill all the fields", 400)
    }

    if (password.length < 8) {
        throw new CustomError("Password must be at least 8 chars")
    }

    const existingUser = await User.findOne({email})
    if (existingUser) {
        throw new CustomError("User already exists", 400)
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const newUser = await User.create({
        name, 
        email,
        password: hashedPassword
    }) 
    const token = jwt.sign({
        email: newUser.email,
        id:newUser._id
    }, "test" , { expiresIn: '1h'});

    res.cookie("token", token)
    res.status(200).json({
        success: true,
        token, 
        newUser
    })
})

export const logIn = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        throw new CustomError("Please fill all the fields", 400)
    }

    const existingUser = await User.findOne({email}).select("+password")
    if (!existingUser) {
        throw new CustomError("Invalid credentials", 400)
    }

    const isPasswordMatched = await bcrypt.compare(password, existingUser.password)

    if (isPasswordMatched) {
        const token = jwt.sign({
            email: existingUser.email,
            id: existingUser._id
        }, "test", {expiresIn: "1h"});
        res.cookie("token", token);
        res.status(200).json({
            success: true,
            token,
            existingUser
        })
    }
    throw new CustomError("Incorrect password", 400)
})