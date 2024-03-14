import express from 'express'
import { signUp, logIn, getAllUser, updateProfile } from '../controllers/auth.controller.js'
import auth from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/signup', signUp)
router.post('/login', logIn)
router.get('/getalluser', getAllUser)
router.patch('/updateuser/:id', auth, updateProfile)

export default router