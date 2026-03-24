import React, { useState } from 'react';
import AppsPageHeading from '../../Shared/AppsPageHeading/AppsPageHeading';
import { useLoaderData, useNavigation } from 'react-router';
import AppsCard from '../../Shared/AppsCard/AppsCard';
import NoDataFound from '../../Shared/NoDataFound/NoDataFound';
import Loader from '../../Shared/Loader/Loader';

const Apps = () => {
  const allApps = useLoaderData();
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const searchesApps = allApps.filter(app => app.title.toLowerCase().includes(searchText.toLowerCase()) || app.companyName.toLowerCase().includes(searchText.toLowerCase()))
  return (
    <div className='w-11/12 mx-auto'>
      <AppsPageHeading title={"Our All Applications"} des={"Explore All Apps on the Market developed by us. We code for Millions"} />
      <div className='flex flex-col-reverse md:flex-row gap-5 items-center justify-between mt-10'>
        <h3 className='text-2xl font-semibold'>({searchesApps.length}) Apps Found</h3>
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
            <input
              value={searchText}
              type="search"
              required placeholder="Search Apps"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div >
        {navigation.state === 'loading' && <Loader/>}
        {
          searchesApps.length > 0 ? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10'>
            {searchesApps.map(app => <AppsCard key={app.id} app={app} />)}
          </div> : (<NoDataFound emplyStatetitle={"No Apps Found!"} description={"We couldn't find any apps matching your search. Try using different or shorter keywords."} showBtn={false}/>)
        }
      </div>
    </div>
  );
};

export default Apps;