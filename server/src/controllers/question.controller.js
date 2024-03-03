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