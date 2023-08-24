const express = require('express')
import mongoose from 'mongoose'
import { Event } from './model/Event'
const app = express()

app.use(express.json())

const Dog = mongoose.model('Dog', {
    name: String,
})

app.get('/dogs', async (request, response) => {
    const dogs = await Dog.find({})
    response.json({ dogs })
})

app.post('/dogs', async (request, response) => {
    const { dog } = request.body
    const newDog = await Dog.create({
        ...dog,
    })
    response.json({ dog: newDog })
})

module.exports = app
