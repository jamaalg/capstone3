import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import { Event } from './model/Event.js'
import {
    getRandomDate,
    getRandomTicketPrice,
    getRandomCategory,
    getRandomCapacity,
    getRandomBtwn0and99,
    getRandomTime,
} from './utils/generators.js'

import { fakeArtistNames } from './utils/data/artists.js'
import { fakeEventDescriptions } from './utils/data/description.js'
import { fakeEventTitles } from './utils/data/events.js'
import { fakeEventPromoterNames } from './utils/data/promoters.js'
import { categories } from './utils/data/categories.js'
import { usCities } from './utils/data/cities.js'

import auth from './routes/auth.js'

const app = express()
app.use(express.json())
app.use('/api', auth)

mongoose.connect(process.env.DB_URL)

const PORT = process.env.PORT || 4000

/* const ev = new Event({
    name: 'Big Christmas Celebration',
    promoter: 'Santa Claus',
    description:
        'Santa Claus invites you to the north pole to enjoy plenty of cheer and gifts amongst the elvish family.',
    date: getRandomDate(),
    duration: 120,
    location: {
        city: 'North Pole',
        state: 'AK',
        address: '449 N Santa Claus Ln',
    },
    category: 'Performing/Visual Arts',
    ticketPrice: 499.99,
    capacity: 500,
    attendees: ['Greg Gimble'],
})

app.post('/events', async (req, res) => {
    ev.save()
    const events = await Event.findOne({})
    console.log(events)
})

app.get('/', async (req, res, next) => {
    const rDate = getRandomDate()
    const rTicket = getRandomTicketPrice()
    const rCap = getRandomCapacity()
    const rCat = getRandomCategory()
    const artist = fakeArtistNames[getRandomBtwn0and99()]
    const desc = fakeEventDescriptions[getRandomBtwn0and99()]
    const eventTitle = fakeEventTitles[getRandomBtwn0and99()]
    const promoter = fakeEventPromoterNames[getRandomBtwn0and99()]
    res.send({
        name: eventTitle,
        description: desc,
        promoter,
        artist,
        eventDate: rDate,
        startTime: getRandomTime(),
        ticketPrice: rTicket,
        capacity: rCap,
        category: categories[rCat],
    })
})
 */

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
