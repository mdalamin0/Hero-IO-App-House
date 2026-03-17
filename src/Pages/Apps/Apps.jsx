import React from 'react';
import AppsPageHeading from '../../Shared/AppsPageHeading/AppsPageHeading';
import { useLoaderData } from 'react-router';
import AppsCard from '../../Shared/AppsCard/AppsCard';

const Apps = () => {
  const allApps = useLoaderData();
  console.log(allApps)
  return (
    <div className='w-11/12 mx-auto'>
      <AppsPageHeading title={"Our All Applications"} des={"Explore All Apps on the Market developed by us. We code for Millions"} />
      <div className='flex flex-col-reverse md:flex-row gap-5 items-center justify-between mt-10'>
        <h3 className='text-2xl font-semibold'>({allApps.length}) Apps Found</h3>
        <div>
          <label className="input input-primary w-[300px] ">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search Apps" />
          </label>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10'>
        {allApps.map(app => <AppsCard key={app.id} app={app}/>)}
      </div>
    </div>
  );
};

export default Apps;