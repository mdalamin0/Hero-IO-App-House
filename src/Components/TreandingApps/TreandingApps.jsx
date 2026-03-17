import React from 'react';
import AppsPageHeading from '../../Shared/AppsPageHeading/AppsPageHeading';
import AppsCard from '../../Shared/AppsCard/AppsCard';
import { Link } from 'react-router';

const TreandingApps = ({appsData}) => {
  const treandingApps = appsData.filter(app => app.ratingAvg > 4.4);
  console.log(treandingApps.slice(0, 8))
  
  return (
    <div className='w-11/12 mx-auto'>
      <AppsPageHeading title={"Treanding Apps"} des={"Explore All Trending Apps on the Market developed by us"}/>
      <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10'>
        {treandingApps.slice(0, 8).map(app => <AppsCard key={app.id} app = {app}/>)}
      </div>
     <div className='text-center mt-10 pb-20'>
       <Link className='btn btn-wide bg-linear-120 from-[#9F62F2] to-[#632EE3] 
      px-4 py-2 rounded text-sm md:text-[16px] font-semibold text-white cursor-pointer duration-300 hover:shadow-xl'>Show All</Link>
     </div>
    </div>
  );
};

export default TreandingApps;