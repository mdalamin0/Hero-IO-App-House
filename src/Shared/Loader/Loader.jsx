import React from 'react';
import LoadingImg from '../../assets/logo.png'

const Loader = ({ isExiting }) => {
  return (
    <div className={`flex flex-col items-center justify-center h-screen bg-base-300 transition-all duration-700 ease-in-out ${isExiting ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
      }`}>
      <div className='flex items-center gap-3'>
        <h1 className='text-6xl font-bold text-gray-700 dark:text-gray-400'>L</h1>
        <img src={LoadingImg} alt="logo" className='w-16 h-16 animate-spin' />
        <h1 className='text-6xl font-bold text-gray-700 dark:text-gray-400'>ading</h1>
      </div>
    </div>
  );
};

export default Loader;