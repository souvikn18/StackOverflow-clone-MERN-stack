import mongoose from "mongoose";
import Question from "../models/question.schema.js";

export const AskQuestion = async(req, res) => {
    const postQuestionData = req.body;
    const userId = req.userId;
    const postQuestion = new Question({ ...postQuestionData, userId})

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