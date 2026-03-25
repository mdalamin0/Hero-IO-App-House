import React from 'react';
import PlayStoreImg from "../../assets/Play-Store.png"
import AppStoreImg from "../../assets/App-Store.png"
import HeroImg from "../../assets/hero.png"
import BannerText from './BannerText';

const Banner = () => {
  return (
    <>
    <div className=' pt-15 text-center'>
      <div className='w-11/12 mx-auto'>
        <h1 className='text-3xl md:text-6xl font-bold mt text-gray-700 dark:text-gray-100'>We Build <br />
          <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
        <p className='italic text-gray-600 dark:text-gray-400 mt-4 '>At HERO.IO Apps House, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className='hidden md:flex' /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

        <div className=' my-10 flex flex-wrap items-center justify-center gap-4'>
          <a href='https://play.google.com/store/apps?hl=en' target='_blank' className='btn md:btn-xl text-[12px] md:text-lg md:font-semibold '> <img src={PlayStoreImg} alt="play store" className='w-5 md:w-8 h-5 md:h-8' /> Google Play</a>
          <a href='https://www.apple.com/app-store/' target='_blank' className='btn md:btn-xl text-[12px] md:text-lg md:font-semibold'><img src={AppStoreImg} alt="app store" className='w-5 md:w-8 h-5 md:h-8' /> App Store</a>
        </div>
        <div>
          <img src={HeroImg} alt="Hero" className='pt-6 md:pt-10 mx-auto' />
        </div>
      </div>
    </div>
    <BannerText/>
    </>
  );
};

export default Banner;