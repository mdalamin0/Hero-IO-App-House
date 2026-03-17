import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div className='bg-base-300'>
      <NavBar/>
      <Outlet/>
    </div>
  );
};

export default Root;