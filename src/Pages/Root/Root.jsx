import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
  return (
    <div className='bg-base-300'>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Root;