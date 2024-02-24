import express from 'express'
import { AskQuestion } from '../controllers/question.controller.js';

const router = express.Router();

router.post('/askquestions', AskQuestion);

export default router