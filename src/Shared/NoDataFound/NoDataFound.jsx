import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Link } from 'react-router';

const NoDataFound = ({emplyStatetitle, description, showBtn = true}) => {
  return (
    <div className='text-center space-y-5 py-20'>
      <RiErrorWarningLine className='w-full text-9xl text-[#FB2C36]' />
      <h2 className='text-2xl md:text-4xl font-bold'>{emplyStatetitle}</h2>
      {description && <p className='text-gray-600 dark:text-gray-400'>{description}</p>}
      {showBtn && <Link to="/apps" className='btn md:btn-lg bg-gradient-to-r from-[#9F62F2] to-[#632EE3] text-white hover:scale-105 transition-all duration-400'>Browse Apps</Link>}
    </div>
  );
};

export default NoDataFound;