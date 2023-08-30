import React, { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Styles/Login.css';
import BgVideo from './img/bmx.mp4';
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await axios
      .post('http://localhost:4000/api/login', {
        username: data.username,
        password: data.password,
      })
      .then((res) => res.data);
    console.log({
      r: response,
    });

    if (response.message === 'Login successful') {
      auth.login();
      navigate('/profile', {
        state: {
          token: response.token,
        },
      });
    } else {
      navigate('/login');
    }
  };
  console.log(errors);

  return (
    <div className='login-main-container'>
      <video loop muted autoPlay preload='auto' className='video-bg-login'>
        <source src={BgVideo} />
      </video>
      <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <p className='login-header'> Login</p>

        <div className='form-main-container'>
          <div className='username-container'>
            <div className='username-label-container'>
              <label>
                <span>
                  <PersonIcon />
                </span>
                Username
              </label>
            </div>

            <div>
              <input
                className='form-input'
                type='text'
                placeholder='username'
                {...register('username', { required: true })}
              />
            </div>
          </div>

          <div className='password-container'>
            <div>
              <label>
                <span>
                  <PasswordIcon />
                </span>
                Password
              </label>
            </div>

            <div className='password-input'>
              <input
                className='form-input'
                type='password'
                placeholder='password'
                {...register('password', { required: true })}
              />
            </div>
          </div>
        </div>
        <input className='login-submit-btn' type='submit' />
      </form>
    </div>
  );
};
