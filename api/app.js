import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import auth from './routes/auth.js'
import events from './routes/event.js'
import adminUtil from './utils/adminUtil.js'

const app = express()
app.use(express.json())

mongoose.connect(process.env.DB_URL)

app.use('/api', auth)
app.use('/api', events)
app.use('/admin', adminUtil)

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})
