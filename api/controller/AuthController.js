import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { User } from '../model/User.js'
import { writeToFile } from './AdminUtilController.js'

export const register = async (req, res, next) => {
    const someOtherPlaintextPassword = 'not_bacon';
    const saltRounds = 10;
    const myPlaintextPassword = req.body.password;


    //console.log(req.body)

    bcrypt.hash(myPlaintextPassword, saltRounds, async (err, hash) => {
        // Store hash in your password DB.
        let user = new User({
            username: req.body.username,
            password: hash,
            email: req.body.email,
            location: {
                city: req.body.city,//.toUppercase(),
                state: req.body.state//.toUppercase()
            },
            events: []
        })
        writeToFile(req.body.username, myPlaintextPassword)

        console.log(user)

        return await user
            .save()
            .then((user) => {
                // await writeToFile(username, req.body.password)
                return user
            })
            .catch((error) => {
                if (error.code === 11000) {

                    return 'Username already exists, please use another username to register your account.'
                }
                throw new Error('An unknown error occured!')
            })
    });

    return 'User registered successfully'

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

export const login = (req, res, next) => {
    let username = req.body.username
    let password = req.body.password

    User.findOne({ $or: [{ username }, { password }] }).then((user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    res.json({
                        error: err,
                    })
                }
                if (result) {
                    let token = jwt.sign(
                        { username: user.username },
                        'verySecretValue',
                        {
                            expiresIn: '10h',
                        }
                    )
                    res.json({
                        message: 'Login successful',
                        token,
                    })
                } else {
                    res.json({
                        message: 'Password does not match!',
                    })
                }
            })
        } else {
            res.json({
                message: 'No user found!',
            })
        }
    })
}
