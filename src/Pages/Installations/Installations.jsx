import React, { useEffect, useState } from 'react';
import AppsPageHeading from '../../Shared/AppsPageHeading/AppsPageHeading';
import { FaAngleDown } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import { getStoredApps } from '../../Utilities/Utilities';
import InstalledAppsCard from '../../Components/InstalledAppsCard/InstalledAppsCard';

const Installations = () => {
  const appsData = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    // get installed apps data from local storage
    const storedAppsIds = getStoredApps();
    const installedAppsData = appsData.filter(app => storedAppsIds.includes(app.id));
    setInstalledApps(installedAppsData);
  }, [appsData])

  console.log(installedApps)

  return (
    <div className='w-11/12 mx-auto'>
      <AppsPageHeading title={"Your Installed Apps"} des={"Explore All Trending Apps on the Market developed by us"} />
      <div className='flex flex-col-reverse md:flex-row gap-5 items-center justify-between mt-10'>
        <h3 className='text-2xl font-semibold'>({installedApps.length}) Apps Found</h3>
        <div>
          <select className="select">
            <option disabled>Sort By Size</option>
            <option>High-Low</option>
            <option>Low-Hight</option>
          </select>
        </div>
      </div>
      <div className='py-5'>
        {installedApps.map(app => <InstalledAppsCard key={app.id} app={app}/>)}
      </div>
    </div>
  );
};

export default Installations;