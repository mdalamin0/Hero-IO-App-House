import React, { useEffect, useState } from 'react';
import NavBar from '../../Components/Header/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Shared/Loader/Loader';

const Root = () => {
  const navigation = useNavigation();
  const [initialLoading, setInitialLoading] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);

      setTimeout(() => {
        setInitialLoading(false);
      }, 500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <Loader isExiting={exit} />;
  }

  return (
    <div className='bg-base-300'>
      <NavBar />
      {
        navigation.state === 'loading' && <Loader />
      }
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;