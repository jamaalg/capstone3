import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Styles/Login.css';

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    auth.login();
    navigate('/profile');
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <input type='submit' />
    </form>
  );
};
