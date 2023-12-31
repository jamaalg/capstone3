export const getRandomDate = async () => {
    const startDate = new Date('2023-09-01')
    const endDate = new Date('2025-12-31')
    const timeDiff = endDate.getTime() - startDate.getTime()
    const randomTime = Math.random() * timeDiff
    const randomDate = new Date(startDate.getTime() + randomTime)
    return randomDate.toISOString().slice(0, 10)
}

export const getRandomTicketPrice = async () => {
    return (Math.random() * (250 - 10) + 10).toFixed(2)
}

export const getRandomCapacity = async () => {
    return Math.floor(Math.random() * (1000 - 1 + 1)) + 1
}

export const getRandomCategory = async () => {
    return Math.floor(Math.random() * (3 - 0 + 1)) + 0
}

export const getRandomBtwn0and99 = async () => {
    return Math.floor(Math.random() * 100)
}

export const getRandomDuration = async () => {
    return Math.floor(Math.random() * 180)
}
export const getRandomTime = async () => {
    const isAM = Math.random() < 0.5 // Randomly choose AM or PM
    const randomHour = isAM
        ? Math.floor(Math.random() * 3) + 8
        : Math.floor(Math.random() * 3) + 8 + 12
    const randomMinute = Math.floor(Math.random() * 60)
    const amPm = isAM ? 'AM' : 'PM'

    const formattedHour = String(randomHour).padStart(2, '0')
    const formattedMinute = String(randomMinute).padStart(2, '0')

    return `${formattedHour}:${formattedMinute} ${amPm}`
}

export const getRandomPassword = async () => {
    return Math.floor(Math.random() * 180)
}

export const getRandomUsername = async () => {
    return Math.floor(Math.random() * 100)
}

export const getRandomDescription = async () => {
    return Math.floor(Math.random() * 90)
}
