import express from 'express'
import { AskQuestion, getAllQuestions, deleteQuestion } from '../controllers/question.controller.js';

const router = express.Router();

router.post('/askquestions', AskQuestion);
router.get('/get', getAllQuestions)
router.delete('/delete/:id', deleteQuestion)

export default router