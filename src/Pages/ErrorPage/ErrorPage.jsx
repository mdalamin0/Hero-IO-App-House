import React from 'react';
import ErrorImg from '../../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen space-y-4 text-center px-4'>
      <img src={ErrorImg} alt="Error Image" />
      <h2 className='text-3xl md:text-5xl font-semibold'>Oops, page not found!</h2>
      <p className='text-gray-600 dark:text-gray-400 md:text-xl'>Sorry, the page you are looking for might be removed, renamed, or is temporarily unavailable.</p>
      <Link to="/" className='btn btn-md md:btn-lg bg-gradient-to-r from-[#9F62F2] to-[#632EE3] text-white '>Go Back Home</Link>
    </div>
  );
};

export default ErrorPage;