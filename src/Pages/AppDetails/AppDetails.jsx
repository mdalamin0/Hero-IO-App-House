import React from 'react';
import { useLoaderData } from 'react-router';
import AppDetailsStat from './AppDetailsStat';

const AppDetails = () => {
  const appData = useLoaderData();
  const { image, title, size} = appData;
  return (
    <div className='w-11/12 mx-auto pt-20 pb-10'>
      <div className='flex flex-col lg:flex-row gap-5 items-stretch border-b-2 border-gray-300 pb-10'>
        <div className='flex-1 '>
          <img src={image} alt="app" className='w-[350px] h-[350px] rounded-xl shadow-2xl'/>
        </div>
        <div className='flex-2 '>
          <div className='border-b-2 border-purple-700 space-y-3 pb-4'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='text-gray-600'>Developed by <span className='font-semibold text-purple-600'>productive.io</span></p>
          </div>
          <div className='mt-5'>
            <AppDetailsStat appData={appData}/>
          </div>
          <div>
            <button className='btn btn-xl skeleton bg-[#00D390] text-white shadow-xl hover:shadow-2xl btn-success '>Install Now ({size}MB)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;