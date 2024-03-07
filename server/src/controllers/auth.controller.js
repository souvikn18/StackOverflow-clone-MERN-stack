import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import User from '../models/user.schema.js'
import CustomError from '../services/customError.js'

// export const CookieOptions = {
//     expires: new Date(Date.now() + 1*60*60*1000),
//     httpOnly: true
// }

export const signUp = async(req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        throw new CustomError("Please fill all the fields", 400)
    }

    if (password.length < 8) {
        throw new CustomError("Password must be at least 8 chars")
    }

    try {
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
            result: newUser
        })
    } catch (error) {
        res.status(500).json("Something went worng...")
    }

    
}

export const logIn = async(req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        throw new CustomError("Please fill all the fields", 400)
    }

    try {
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
                result: existingUser
            })
        }
    } catch (error) {
        res.status(500).json("Something went worng...")
    }
}

export const getAllUser = async(req, res) => {
    try {
        const allUser = await User.find();
        const allUserDetails = []
        allUser.forEach(user => {
            allUserDetails.push({
                _id: user._id,
                name: user.name,
                email: user.email,
                about: user.about,
                tags: user.tags,
                joinedOn: user.joinedOn
            })
        })
        res.status(200).json(allUserDetails)
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}