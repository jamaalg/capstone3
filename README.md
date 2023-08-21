# capstone3

Capstone3

All Events
Individual Event - description - Location - Rating - RSVP Button
RSVP Form - Ticket Purchase

Database Schema for Events

[Events]
EventName - string
EventDescription - string
EventStartTime - datetime
EventDuration -
Location ( State & City Separate fro filtering)
Address - string
ZipCode - number
Promoter - string
Categories - Sports | Concerts | Business | Performing/Visual Arts  
Ticket Price - number | string
Capacity - number
RSVP List - array[People]

[People]
firstName
lastName
age
