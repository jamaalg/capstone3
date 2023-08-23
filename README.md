# capstone3

Capstone3

Home
All Events
Individual Event - description - Location - Rating - RSVP Button
RSVP Form - Ticket Purchase
Create Event Form

Database Schema for Events
\*\*[Events]

- EventName - string
- EventDescription - string
- Promoter - string
- Peformer - string
- Date - datetime
- EventStartTime - datetime
  EventDuration - number
  Location ( State & City Separate fro filtering)
  Address - string
  ZipCode - number
- Categories - Sports | Concerts | Business | Performing/Visual Arts
- Ticket Price - number | string
- Capacity - number
  RSVP List - array[People]

[People]
firstName
lastName
age
