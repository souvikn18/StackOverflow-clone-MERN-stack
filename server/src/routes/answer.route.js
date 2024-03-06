import express from 'express'
import { deleteAnswer, postAnswer } from '../controllers/answer.controller.js'
import auth from '../middlewares/auth.middleware.js'

const router = express.Router()

router.patch('/post/:id', auth, postAnswer)
router.patch('/delete/:id', auth, deleteAnswer)

export default router