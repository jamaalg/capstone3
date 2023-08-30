import { categories } from '../utils/data/categories.js'
import { fake } from '../utils/fakeData.js'
import { Event } from '../model/Event.js'
import { getEventById } from './EventController.js'
export const getValues = async (req, res, next) => {
    try {
        const distinctValues = await getDistinctValues()
        res.send(distinctValues)
    } catch (error) {
        throw new Error('Error fetching categories.')
    }
}

export const getAllEvents = async (req, res, next) => {
    try {
        const events = await Event.find()
        res.send(events)
    } catch (error) {
        throw new Error('Error fetching events.')
    }
}

export const getAllCategories = async (req, res, next) => {
    try {
        res.send(fake.categories)
    } catch (error) {
        throw new Error('Error fetching events.')
    }
}

export const getDataForSearchPage = async () => {
    try {
        const results = await Event.find()
        console.log(results)
    } catch (error) {
        throw new Error('Error fetching data')
    }
}

const getDistinctValues = async () => {
    const values = {
        events: await Event.find(),
        promoters: await Event.distinct('promoter'),
        categories: await Event.distinct('category'),
        date: await Event.distinct('date'),
        locations: fake.cities,
    }
    return values
}

export const rsvpToEvent = async (req, res, next) => {
    try {
        //const results = await Event.find()
        const { name, address, phoneNumber, tickets, eventId } = req.body
        console.log(req.body)
        const event = await getEventById(eventId)

        if (event.capacity === 0) {
            res.send(`No tickets available.`)
        }

        if (tickets > event.capacity) {
            res.send(
                `Tickets requested(${tickets}) greater than event capacity.`
            )
        }

        event.attendees.push(name)
        event.capacity = event.capacity - tickets
        const response = await event
            .save()
            .then((res) => res)
            .catch((err) => {
                throw Error('Error saving document.')
            })
        res.send(`Successfully rsvp to ${event.name}`)
    } catch (error) {
        throw new Error('Error rsvp to event')
    }
}

/**
 *
 *
 *
 *
 *
 *
 *
 * get the event with specific id
 * increment the attendees by the amount of tickets
 */
