import { Router } from "express"
import userRoutes from './user.routes.js'
import questionRoutes from './question.routes.js'
import answerRoutes from './answer.route.js'

const router = Router()

router.use('/user', userRoutes)
router.use('/question', questionRoutes)
router.use('/answer', answerRoutes)

export default router