import mongoose from "mongoose";
import Question from "../models/question.schema.js";
import CustomError from '../services/customError.js'

export const AskQuestion = async(req, res) => {
    const postQuestionData = req.body;
    const postQuestion = new Question(postQuestionData)

    try {
        await postQuestion.save();
        res.status(200).json({
        success: true,
        message: "Question posted successfully!",
        })
    } catch (error) {
        res.status(409).json({
            success: false,
            message: "Couldn't post question"
        })
    }
}

export const getAllQuestions = async (_req, res) => {
    try {
        const questionList = await Question.find()
        res.status(200).json({
            success: true,
            questionList
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Questions not found"
        })
    }
}

export const deleteQuestion = async (req, res) => {
    const {id: _id} = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        throw new CustomError("Question unavailable", 500)
    }
    try {
        await Question.findByIdAndDelete(_id)
        res.status(200).json({
            success: true,
            message: "Question deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const voteQuestion = async (req, res) => {
    const {id: _id} = req.params
    const {value, userId} = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        throw new CustomError("Question unavailable", 404)
    }

    try {
        const question = await Question.findById(_id)
        // const userId = question.userId
        const upIndex = question.upVotes.findIndex((id) => id === String(userId))
        const downIndex = question.downVotes.findIndex((id) => id === String(userId))


        if (value === 'upVote') {
            if (downIndex !== -1) {
                question.downVotes = question.downVotes.filter((id) => id !== String(userId))
            }
            if (upIndex === -1) {
                question.upVotes.push(userId)
            } else {
                question.upVotes = question.upVotes.filter((id) => id !== String(userId))
            }
        }

        if (value === 'downVote') {
            if (upIndex !== -1) {
                question.upVotes = question.upVotes.filter((id) => id !== String(userId))
            }
            if (downIndex === -1) {
                question.downVotes.push(userId)
            } else {
                question.downVotes = question.downVotes.filter((id) => id !== String(userId))
            }
        }
        await Question.findByIdAndUpdate( _id, question )
        res.status(200).json({
            success: true,
            message: "Voted successfully"
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}