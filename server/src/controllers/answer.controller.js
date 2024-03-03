import mongoose from 'mongoose'
import Question from '../models/question.schema.js'
import CustomError from '../services/customError.js'

export const postAnswer = async ( req, res ) => {
    const { id: _id } = req.params;
    const { noOfAnswers, answerBody, userAnswered } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        throw new CustomError("Question unavailable", 500)
    }

    updatedNoOfAnswers(_id, noOfAnswers)
    
    try {
        const updatedQuestion = await Question.findByIdAndUpdate( _id, { $addToSet: {
            'answers': [{
                answerBody,
                userAnswered,
                userId: req.userId
            }]
        }})
        res.status(200).json({
            success: true,
            updatedQuestion
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const updatedNoOfAnswers = async ( _id, noOfAnswers ) => {
    try {
        await Question.findByIdAndUpdate( _id, {
            $set: {
                'noOfAnswers': noOfAnswers
            }
        })
    } catch (error) {
        console.log(error);
    }
}