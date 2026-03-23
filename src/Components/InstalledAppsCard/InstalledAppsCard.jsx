import React from 'react';
import { FaStar } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';

const InstalledAppsCard = ({ app, handleUnInstallApps }) => {
  const { id, image, title, downloads, ratingAvg, size } = app;
  const downloadFormatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short'
  })
  return (
    <div className='flex flex-col md:flex-row gap-3 justify-between md:items-center bg-white border-1 border-gray-200 p-4 rounded-xl shadow-sm mt-5' >
      <div className='flex items-center gap-3'>
        <div className='w-14 h-14 shrink-0'>
          <img src={image} alt="app" className='w-full h-full object-cover rounded-xl' />
        </div>
        <div>
          <h3 className='dark:text-black font-semibold'>{title}</h3>
          <div className='flex items-center gap-3'>
            <p className="flex items-center rounded text-[#00D390] font-medium "><LuDownload size={18} className='mr-1' /> {downloadFormatter.format(downloads)} </p>
            <p className="flex items-center rounded text-[#FF8811] font-medium "><FaStar size={18} className='mr-1'/> {ratingAvg} </p>
            <p className='text-gray-600'>{size}MB</p>
          </div>
        </div>
      </div>
      <div className='text-right'>
        <button onClick={() => handleUnInstallApps(id)} className='btn btn-sm  md:btn-md bg-[#00D390] text-white hover:bg-[#1bb685] duration-300 dark:border-0'>UnInstall</button>
      </div>
    </div>
  );
};

export default InstalledAppsCard;