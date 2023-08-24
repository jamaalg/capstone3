import mongoose from 'mongoose'
const { Schema, model } = mongoose

const EventSchema = new Schema({
    name: String,
    artist: String,
    promoter: String,
    description: String,
    date: String,
    startTime: String,
    duration: Number,
    location: {
        city: String,
        state: String,
        address: String,
    },
    category: String,
    ticketPrice: Number,
    capacity: Number,
    attendees: [String],
})

export const Event = model('Event', EventSchema)

/*
'Sports' | 'Concerts' | 'Business' | 'Performing/Visual Arts',
*/
