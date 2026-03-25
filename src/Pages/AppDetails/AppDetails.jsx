import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppDetailsStat from './AppDetailsStat';
import RatingChart from '../../Components/RatingChart/RatingChart';
import { addAppsToLocalStorage, getStoredApps } from '../../Utilities/Utilities';
import NoDataFound from '../../Shared/NoDataFound/NoDataFound';
import { Helmet } from 'react-helmet-async';


const AppDetails = () => {
  const appData = useLoaderData();
  const appId = useParams();

  console.log(appId)
  const { id, image, title, size, description } = appData;
  const [install, setInstall] = useState(false);

  useEffect(() => {
    const installedApps = getStoredApps();
    const isExistingApps = installedApps.find(appId => appId === id);
    if (isExistingApps) {
      setInstall(true)
    }
  }, [id])

  const handleInstall = (id) => {
    setInstall(true)
    addAppsToLocalStorage(id);
  }



  return (
    <>
      <div className='w-11/12 mx-auto pt-20 pb-10'>
        <Helmet>
          <title>Book Details | Hero Apps House</title>
        </Helmet>
        <div className='flex flex-col lg:flex-row gap-5 items-stretch border-b-2 border-gray-300 pb-10'>
          <div className='flex-1 '>
            <img src={image} alt="app" className='w-[350px] h-[350px] rounded-xl shadow-2xl' />
          </div>
          <div className='flex-2 '>
            <div className='border-b-2 border-purple-700 space-y-3 pb-4'>
              <h1 className='text-3xl font-bold'>{title}</h1>
              <p className='text-gray-600 dark:text-gray-400'>Developed by <span className='font-semibold text-purple-600'>productive.io</span></p>
            </div>
            <div className='mt-5'>
              <AppDetailsStat appData={appData} />
            </div>
            <div className='mt-5'>
              <button onClick={() => handleInstall(id)} className={`btn md:btn-xl  bg-[#00D390] text-white shadow-xl hover:shadow-2xl btn-success  ${install ? "btn-disabled" : "skeleton"}`}>{install ? "Installed" : `Install Now (${size}MB)`} </button>
            </div>
          </div>
        </div>
        <RatingChart appData={appData} />

        <div className='mt-10'>
          <h2 className='text-3xl font-bold'>Description</h2>
          <p className='text-gray-600 dark:text-gray-400 font-medium mt-5'>{description}</p>
        </div>
      </div>
    </>
  );
};

export default AppDetails;