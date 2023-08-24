import express from 'express'
const router = express.Router()
import * as EventController from '../controller/EventController.js'

router.get('/events', EventController.getEvents)
router.get('/events/:category', EventController.getEventsByCategory)
router.get('/event/:id', EventController.getEvent)
router.post('/events', EventController.createEvent)
export default router
