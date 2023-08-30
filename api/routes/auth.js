import express from 'express'
const router = express.Router()
import * as AuthController from '../controller/AuthController.js'

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/getUser', AuthController.getUser)

export default router
