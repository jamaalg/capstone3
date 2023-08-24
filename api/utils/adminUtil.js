import express from 'express'
const router = express.Router()
import * as AdminUtilController from '../controller/AdminUtilController.js'

router.get('/previewGeneratedEvent', AdminUtilController.previewGeneratedEvent)
router.get('/previewGeneratedUser', AdminUtilController.previewGeneratedUser)
router.post('/generateAndSaveEvent', AdminUtilController.generateAndSaveEvent)
router.post('/generateAndSaveUser', AdminUtilController.generateAndSaveUser)

export default router
