import { categories } from '../utils/data/categories.js'
import { fake } from '../utils/fakeData.js'
import { Event } from '../model/Event.js'

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
