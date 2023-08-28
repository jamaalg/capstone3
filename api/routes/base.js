import express from 'express'
const router = express.Router()
import * as BaseRouteController from '../controller/BaseRouteController.js'

router.get('/', BaseRouteController.getValues)
router.get('/getEvents', BaseRouteController.getAllEvents)
router.get('/getCategories', BaseRouteController.getAllCategories)
router.get('/getRandomEvent', BaseRouteController.getAllCategories)

export default router
