import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Styles/Login.css';
import BgVideo from './img/bmx.mp4';
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';

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
                type='password'
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
