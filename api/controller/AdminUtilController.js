import { Event } from '../model/Event.js'
import { User } from '../model/User.js'
import {
    getRandomDate,
    getRandomTicketPrice,
    getRandomCategory,
    getRandomCapacity,
    getRandomBtwn0and99,
    getRandomTime,
    getRandomPassword,
    getRandomUsername,
    getRandomDescription,
    getRandomDuration,
} from '../utils/generators.js'
import { fake } from '../utils/fakeData.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import { registerFakeUser } from './AuthController.js'

export const previewGeneratedEvent = async (req, res, next) => {
    try {
        const eventData = await generateEventData()
        console.log(eventData)
        res.send(eventData)
    } catch (err) {
        throw new Error(err)
    }
}

export const generateAndSaveEvent = async (req, res, next) => {
    try {
        const event = new Event(await generateEventData())
        const response = await event
            .save()
            .then((res) => res)
            .catch((err) => {
                throw Error('Error saving document.')
            })
        res.json({
            message: 'Event successfully saved.',
            response,
        })
    } catch (error) {
        res.json({
            error,
        })
    }
}

export const generateAndSaveUser = async (req, res, next) => {
    try {
        const userData = await generateUserData()
        await writeToFile(userData.username, userData.password)
        const response = await registerFakeUser(userData)
        res.json({
            message: response,
        })
    } catch (err) {
        console.error(err)
        res.json({
            error,
        })
    }
}

export const previewGeneratedUser = async (req, res, next) => {
    try {
        const location = await getCityState()
        const userName = fake.usernames[await getRandomBtwn0and99()]
        const email = fake.email[await getRandomBtwn0and99()]
        const pass = fake.passwords[await getRandomBtwn0and99()]

        await writeToFile(userName, pass)
        res.send({
            username: userName,
            email,
            password: pass,
            locatio: {
                city: location.city,
                state: location.state,
            },
        })
    } catch (error) {
        throw new Error(error)
    }
}

export const generateEventData = async () => {
    try {
        console.log('Generating...')
        const location = await getCityState()
        const date = await getRandomDate()
        const ticketPrice = await getRandomTicketPrice()
        const capacity = await getRandomCapacity()
        const category = fake.categories[await getRandomCategory()]
        const artist = fake.artist[await getRandomBtwn0and99()]
        const description = fake.description[await getRandomDescription()]
        const name = fake.eventTitle[await getRandomBtwn0and99()]
        const promoter = fake.promoter[await getRandomBtwn0and99()]
        const startTime = await getRandomTime()
        const duration = await getRandomDuration()
        const address = fake.address[await getRandomBtwn0and99()]
        const attendees = []
        return {
            name,
            artist,
            promoter,
            description,
            date,
            startTime,
            duration,
            location: {
                city: location.city,
                state: location.state,
                address,
            },
            category,
            ticketPrice,
            capacity,
            attendees,
        }
    } catch (error) {
        throw Error('Error generating event data')
    }
}

export const generateUserData = async () => {
    try {
        const location = await getCityState()
        const username = fake.usernames[await getRandomBtwn0and99()]
        const email = fake.email[await getRandomBtwn0and99()]
        const password = fake.passwords[await getRandomBtwn0and99()]
        const events = []
        return {
            username,
            email,
            password,
            location: {
                city: location.city,
                state: location.state,
            },
            events,
        }
    } catch (error) {
        throw Error('Error generating user data')
    }
}
export const getCityState = async () => {
    let input = fake.cities[await getRandomBtwn0and99()]
    input = input.split(', ')
    return {
        city: input[0],
        state: input[1],
    }
}

const writeToFile = async (username, password) => {
    fs.appendFile(
        path.join(__dirname, '../utils/data/users.txt'),
        `${username}, ${password}\n`,
        (err) => {
            if (err) throw err
            console.log('The file has been saved!')
        }
    )
}
