import express from 'express'
import { AskQuestion, getAllQuestions } from '../controllers/question.controller.js';

const router = express.Router();

router.post('/askquestions', AskQuestion);
router.get('/get', getAllQuestions)

export default router