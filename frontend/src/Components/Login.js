import React from 'react';
import { useForm } from 'react-hook-form';
import './Styles/Login.css';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
      <input
        type='password'
        placeholder='username'
        {...register('username', { required: true })}
      />
      <input
        type='password'
        placeholder='password'
        {...register('password', { required: true })}
      />

      <input type='submit' className='form-btn' />
    </form>
  );
};
