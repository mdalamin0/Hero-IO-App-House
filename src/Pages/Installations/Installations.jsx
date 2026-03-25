import React, { useEffect, useState } from 'react';
import AppsPageHeading from '../../Shared/AppsPageHeading/AppsPageHeading';
import { FaAngleDown } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import { getStoredApps, removeApps } from '../../Utilities/Utilities';
import InstalledAppsCard from '../../Components/InstalledAppsCard/InstalledAppsCard';
import { toast } from 'react-toastify';
import NoDataFound from '../../Shared/NoDataFound/NoDataFound';
import { Helmet } from 'react-helmet-async';

const Installations = () => {
  const appsData = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    // get installed apps data from local storage
    const storedAppsIds = getStoredApps();
    const installedAppsData = appsData.filter(app => storedAppsIds.includes(app.id));
    const sortBySizeApps = [...installedAppsData].sort((a, b) => b.size - a.size)
    setInstalledApps(sortBySizeApps);
  }, [appsData])

  const handleUnInstallApps = (id) => {
    const remainingApps = installedApps.filter(app => app.id !== id)
    console.log(remainingApps)
    setInstalledApps(remainingApps);
    removeApps(id);
    toast("Un-installed from your device!")
  }

  const handleSort = (type) => {
    if (type === 'high-low') {
      const sortByDescendingDownloads = [...installedApps].sort((a, b) => b.downloads - a.downloads);
      setInstalledApps(sortByDescendingDownloads);
    }
    if (type === 'low-high') {
      const sortbyAscendingDownloads = [...installedApps].sort((a, b) => a.downloads - b.downloads);
      setInstalledApps(sortbyAscendingDownloads)
    }
  }

  return (
    <div className='w-11/12 mx-auto'>
      <Helmet>
        <title>Installed Apps | Hero Apps House</title>
      </Helmet>
      <AppsPageHeading title={"Your Installed Apps"} des={"Explore All Trending Apps on the Market developed by us"} />
      <div className='flex flex-col-reverse md:flex-row gap-5 items-center justify-between mt-10'>
        <h3 className='text-2xl font-semibold'>({installedApps.length}) Apps Found</h3>
        <div>
          <select defaultValue="Sort By Size" className="select">
            <option disabled={true}>Sort By Size</option>
            <option onClick={() => handleSort('high-low')}>High-Low</option>
            <option onClick={() => handleSort('low-high')}>Low-Hight</option>
          </select>
        </div>
      </div>
      <div className='pt-5 pb-20'>
        {installedApps.length === 0 ? <NoDataFound emplyStatetitle={"No apps installed yet!"} description={'Start exploring and install your favorite apps!'} /> :
          <>
            {installedApps.map(app => <InstalledAppsCard
              key={app.id}
              app={app}
              handleUnInstallApps={handleUnInstallApps}
            />)}
          </>
        }

      </div>
    </div>
  );
};

export default Installations;