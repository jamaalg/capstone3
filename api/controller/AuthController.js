import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { User } from '../model/User.js'

export const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        if (err) {
            res.json({
                error: err,
            })
        }

        let user = new User({
            email: req.body.email,
            password: hashedPass,
        })

        user.save()
            .then((user) => {
                res.json({
                    message: 'User added successfully!',
                })
            })
            .catch((error) => {
                if (error.code === 11000) {
                    res.json({
                        message:
                            'Email already exists, please use another email to register your account.',
                    })
                }
                res.json({
                    message: 'An unknown error occured!',
                })
            })
    })
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
    let email = req.body.email
    let password = req.body.password

    User.findOne({ $or: [{ email }, { password }] }).then((user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    res.json({
                        error: err,
                    })
                }
                if (result) {
                    let token = jwt.sign(
                        { email: user.email },
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
