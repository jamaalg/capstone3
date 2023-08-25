import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import auth from './routes/auth.js'
import events from './routes/event.js'
import adminUtil from './utils/adminUtil.js'
import baseRoute from './routes/base.js'

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL)

app.use('/api', auth)
app.use('/api', events)
app.use('/admin', adminUtil)
app.use('/', baseRoute)

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})
