import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Event } from '../model/Event.js'
import { fake } from '../utils/fakeData.js'
import {
    getRandomBtwn0and99,
    getRandomCapacity,
    getRandomCategory,
    getRandomDate,
    getRandomTicketPrice,
    getRandomDuration,
    getRandomTime,
} from '../utils/generators.js'

export const getEvents = async (req, res, next) => {
    const results = await Event.find()
    console.log(results)
    res.send({
        events: results,
    })
}

export const getEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id
        const event = await Event.findById(eventId).exec()
        res.json({
            message: 'Event found',
            event,
        })
    } catch (error) {
        res.json({
            message: error,
        })
    }
}

export const getEventsByCategory = async (req, res, next) => {
    let category = req.params.category
    console.log(category)
    const results = await Event.find({ category: category })
    res.json({
        events: results,
    })
}

export const createEvent = async (req, res, next) => {
    try {
        // console.log(req.body)
        // const { name } = req.body.event
        const event = await createNewEventAutomated()
        event.save({ validateBeforeSave: true })
        console.log(event)
        res.json({
            message: 'Event to be saved',
            event,
        })
    } catch (error) {
        res.json({
            message: error,
        })
    }
}

export const createNewEventAutomated = async () => {
    const location = await getCityState()
    return new Event({
        name: fake.eventTitle[getRandomBtwn0and99()],
        promoter: fake.promoter[getRandomBtwn0and99()],
        description: fake.description[getRandomBtwn0and99()],
        date: getRandomDate(),
        startTime: getRandomTime(),
        duration: getRandomDuration(),
        location: {
            city: location.city,
            state: location.state,
            address: fake.address[getRandomBtwn0and99()],
        },
        category: fake.categories[getRandomCategory()],
        ticketPrice: getRandomTicketPrice(),
        capacity: getRandomCapacity(),
        attendees: [],
    })
}

export const getCityState = async () => {
    let input = fake.cities[getRandomBtwn0and99()]
    input = input.split(', ')
    return {
        city: input[0],
        state: input[1],
    }
}

export const getEventById = async (eventId) => {
    try {
        return await Event.findById(eventId)
    } catch (err) {
        console.error(err)
    }
}

export const getEventsByDate = async (req, res, next) => {
    try {
        console.log(req.query)
        let requestedDate = req.query.date
        const response = await Event.find({ date: requestedDate })
        console.log(response)
        res.send(response)
    } catch (err) {
        console.error(err)
    }
}

export const getUpcomingEvents = async (req, res, next) => {
    try {
        let currentDate = req.body.date
        const response = await Event.find({})
            .sort({
                date: 1,
            })
            .limit(20)
        console.log(response)
        res.send(response)
    } catch (err) {
        console.error(err)
    }
}
