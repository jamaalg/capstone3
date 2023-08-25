import express from 'express'
const router = express.Router()
import * as BaseRouteController from '../controller/BaseRouteController.js'

router.get('/', BaseRouteController.getValues)

export default router
