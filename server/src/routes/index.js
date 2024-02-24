import { Router } from "express"
import userRoutes from './user.routes.js'
import questionRoutes from './question.routes.js'

const router = Router()

router.use('/user', userRoutes)
router.use('/question', questionRoutes)

export default router