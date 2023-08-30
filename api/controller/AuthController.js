import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { User } from '../model/User.js'
import { writeToFile } from './AdminUtilController.js'

export const register = async (req, res, next) => {
    const saltRounds = 10
    const myPlaintextPassword = req.body.password

    //console.log(req.body)

    bcrypt.hash(myPlaintextPassword, saltRounds, async (err, hash) => {
        // Store hash in your password DB.
        let user = new User({
            username: req.body.username,
            password: hash,
            email: req.body.email,
            location: {
                city: req.body.city, //.toUppercase(),
                state: req.body.state, //.toUppercase()
            },
            events: [],
        })
        writeToFile(req.body.username, myPlaintextPassword)

        console.log(user)

        return await user
            .save()
            .then((user) => {
                console.log('User registered successfully')
                return user
            })
            .catch((error) => {
                if (error.code === 11000) {
                    return 'Username already exists, please use another username to register your account.'
                }
                throw new Error('An unknown error occured!')
            })
    })

    res.send('Registered!')
}

export const registerFakeUser = async (userParam) => {
    bcrypt.hash(userParam.password, 10, async (err, hashedPass) => {
        if (err) {
            throw new Error(err)
        }

        let user = new User({
            username: userParam.username,
            email: userParam.email,
            password: hashedPass,
            location: {
                city: userParam.location.city,
                state: userParam.location.state,
            },
            events: userParam.events,
        })

        console.log({ userModel: user })

        return await user
            .save()
            .then((user) => {
                return 'User created successfully.'
            })
            .catch((error) => {
                if (error.code === 11000) {
                    return 'Email already exists, please use another email to register your account.'
                }
                throw new Error('An unknown error occured!')
            })
    })
}

export const login = async (req, res, next) => {
    try {
        let usernameParam = req.body.username
        let passwordParam = req.body.password

        console.log(req.body)

        const user = await getUser(usernameParam)

        bcrypt.compare(passwordParam, user.password, async (err, result) => {
            console.log('Comparing password in bcrypt')
            if (err) {
                res.send('Error logging in')
            }

            let token = jwt.sign(
                { username: user.username },
                'verySecretValue',
                {
                    expiresIn: '10h',
                }
            )

            return { message: 'Login successful', token, user }
        })
    } catch (err) {
        console.error(err)
    }
}

export const getUser = async (usernameParam) => {
    const user = await User.find({ username: usernameParam }).exec()
    console.log(user)

    return user
}
