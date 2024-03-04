import mongoose from 'mongoose'
import Question from '../models/question.schema.js'
import CustomError from '../services/customError.js'

export const postAnswer = async ( req, res ) => {
    const { id: _id } = req.params;
    const { noOfAnswers, answerBody, userAnswered, userId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        throw new CustomError("Question unavailable", 500)
    }

    updatedNoOfAnswers(_id, noOfAnswers)
    
    try {
        const updatedQuestion = await Question.findByIdAndUpdate( _id, { $addToSet: {
            'answers': [{
                answerBody,
                userAnswered,
                userId
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

export const deleteAnswer = async(req, res) => {
    const {id: _id} = req.params
    const {answerId, noOfAnswers} = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        throw new CustomError("Question unavailable", 404)
    }
    if (!mongoose.Types.ObjectId.isValid(answerId)) {
        throw new CustomError("Answer unavailable", 404)
    }

    updatedNoOfAnswers(_id, noOfAnswers)

    try {
        await Question.updateOne(
            {_id},
            { 
                $pull:{
                    'answers':{
                        _id: answerId
                    }
                }
            }
        )
        res.status(200).json({
            success: true,
            message: "Answer deleted successfully!"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}