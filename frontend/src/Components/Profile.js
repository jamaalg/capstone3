import React from 'react';
import { useLocation } from 'react-router-dom';

export const Profile = () => {
  const { state } = useLocation();

  return (
    <div className='profile-main-container'>
      <p> Profile </p>
      {state.token}
    </div>
  );
};
