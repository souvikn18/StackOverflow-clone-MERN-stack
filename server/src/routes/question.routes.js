import express from 'express'
import { AskQuestion, getAllQuestions, deleteQuestion, voteQuestion } from '../controllers/question.controller.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/askquestions', auth, AskQuestion);
router.get('/get', getAllQuestions)
router.delete('/delete/:id', auth, deleteQuestion)
router.patch('/vote/:id', auth, voteQuestion)

export default router