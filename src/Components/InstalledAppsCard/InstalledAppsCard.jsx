import React from 'react';

const InstalledAppsCard = ({app}) => {
  const {image, title} = app;
  return (
    <div className='flex justify-between items-center bg-white border-1 border-gray-200 p-4 rounded-xl shadow-sm mt-5' >
      <div className='flex items-center gap-3'>
        <div className='w-14 h-14 shrink-0'>
          <img src={image} alt="app" className='w-full h-full object-cover rounded-xl' />
        </div>
        <div>
          <h3>{title}</h3>
        </div>
      </div>
      <div>
        <button className='btn  md:btn-lg bg-[#00D390] text-white hover:bg-[#1bb685] duration-300'>UnInstall</button>
      </div>
    </div>
  );
};

export default InstalledAppsCard;