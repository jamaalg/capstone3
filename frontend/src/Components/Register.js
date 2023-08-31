import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Styles/Register.css';
import {
  faUser,
  faEnvelope,
  faBuilding,
  faMapLocationDot,
  faKey
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles/Login.css';
import axios from 'axios';
import BgVideo from './img/airballoon.mp4';

export const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await axios
      .post('http://localhost:4000/api/register', data)
      .then((res) => res.data);
    console.log(response);

    navigate('/');
  };

  return (
    <div className='main-container'>
      <video loop muted autoPlay preload='auto' className='video-bg-login'>
        <source src={BgVideo} />
      </video>
      <form onSubmit={handleSubmit(onSubmit)} className='reg-form-container'>
        <p className='register-header'>Register</p>

        <div className='test-container'>
          <div id='city-div'>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input
            type='text'
            placeholder='username'
            {...register('username', { required: true })}
          />
        </div>

        <div className='test-container'>
          <div id='city-div'>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <input
            type='text'
            placeholder='email'
            {...register('email', { required: true })}
          />
        </div>
        <div className='test-container'>
          <div id='city-div'>
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <input
            type='text'
            placeholder='city'
            {...register('city', { required: true })}
          />
        </div>
        <div className='test-container'>
          <div id='city-div'>
            <FontAwesomeIcon icon={faMapLocationDot} />
          </div>
          <input
            type='text'
            placeholder='state'
            {...register('state', { required: true, maxLength: 2 })}
          />
        </div>
        <div className='test-container'>
          <div id='city-div'>
            <FontAwesomeIcon icon={faKey} />
          </div>
          <input
            type='password'
            placeholder='password'
            {...register('password', { required: true })}
          />
        </div>

        <input id='reg-submit' type='submit' />
      </form>
    </div>
  );
};
