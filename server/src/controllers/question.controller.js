import mongoose from "mongoose";
import Question from "../models/question.schema.js";

export const AskQuestion = async(req, res) => {
    const postQuestionData = req.body;
    const userId = req.userId;
    const postQuestion = new Question({ ...postQuestionData, userId})

    try {
        const newQuestion = await postQuestion.save();
        console.log(newQuestion);
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

export const getAllQuestions = async (req, res) => {
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