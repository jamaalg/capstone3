import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import './Styles/Login.css';
import axios from 'axios';

export const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const response = await axios.post('http://localhost:4000/api/register', data).then(res => res.data)
        console.log(response);

        Navigate('/');
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type='text'
                placeholder='username'
                {...register('username', { required: true })}
            />
            <input
                type='text'
                placeholder='email'
                {...register('email', { required: true })}
            />
            <input
                type='text'
                placeholder='city'
                {...register('city', { required: true })}
            />
            <input
                type='text'
                placeholder='state'
                {...register('state', { required: true, maxLength: 2 })}
            />
            <input
                type='password'
                placeholder='password'
                {...register('password', { required: true })}
            />

            <input type='submit' />
        </form>
    );
};
