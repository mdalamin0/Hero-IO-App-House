import React from 'react';

const BannerText = () => {
  return (
   <div className=' bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>
     <div className='w-11/12 mx-auto text-center'>
      <h3 className='text-4xl md:text-5xl  font-bold pt-20 pb-10 text-white'>Trusted by Millions, Built for You</h3>
      <div className="md:stats text-white pb-20">
        <div className="stat">
          <div className="">Total Downloads</div>
          <div className="text-[64px] font-extrabold">29.6M</div>
          <div className="">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="">Total Reviews</div>
          <div className="text-[64px] font-extrabold">906K</div>
          <div className="">46% more than last month</div>
        </div>
        <div className="stat">
          <div className="">Active Apps</div>
          <div className="text-[64px] font-extrabold">132+</div>
          <div className="">31 more will Launch</div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default BannerText;