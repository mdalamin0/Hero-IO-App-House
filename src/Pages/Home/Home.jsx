import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TreandingApps from '../../Components/TreandingApps/TreandingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
  const appsData = useLoaderData();
  
  return (
    <div >
      <Banner/>
      <TreandingApps appsData={appsData}/>
    </div>
  );
};

export default Home;