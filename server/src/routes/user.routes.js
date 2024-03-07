import express from 'express'
import { signUp, logIn, getAllUser } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/signup', signUp)
router.post('/login', logIn)
router.get('/getalluser', getAllUser)

export default router