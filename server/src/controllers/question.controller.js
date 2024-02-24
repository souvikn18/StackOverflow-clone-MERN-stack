import mongoose from "mongoose";
import Question from "../models/question.schema.js";
import asyncHandler from "../services/asyncHandler.js";

export const AskQuestion = asyncHandler( async(req, res) => {
    const postQuestionData = req.body;
    const userId = req.userId;
    const postQuestion = new Question({ ...postQuestionData, userId})

    console.log(req.body);

    // const { questionTitle, questionBody, questionTags } = req.body;
    // const postQuestion = new Question({
    //     questionTitle: questionTitle,
    //     questionBody: questionBody,
    //     questionTags: questionTags,
    //     userId: req.userId,
    //     userPosted: req.userPosted
    // })

    if (postQuestion) {
        const newQuestion = await postQuestion.save();
        res.status(200).json({
        success: true,
        message: "Question posted successfully!",
        newQuestion
        })
    }
    res.status(409).json({
        success: false,
        message: "Couldn't post question"
    })
    
})