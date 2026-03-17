import React from 'react';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router';

const AppsCard = ({ app }) => {
  console.log(app)
  const {image, title, downloads, ratingAvg} = app;
  const viewFormatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short'
  });

  return (
    <Link className="card flex flex-col h-full bg-white shadow-lg p-4 hover:-translate-y-2 transition-all duration-200">
      <figure className="aspect-[4/4] w-full overflow-hidden">
        <img
          src={image}
          alt="app"
          className="rounded-xl h-full w-full object-cover " />
      </figure>
      <div className="flex flex-col flex-grow">
        <div className=''>
          <h2 className="card-title my-4">{title}</h2>
        </div>
        <div className="card-actions justify-between mt-auto">
          <p className="bg-base-300 py-1.5 px-2 flex items-center rounded text-[#00D390] font-medium "><LuDownload size={18} className='mr-2'/> {viewFormatter.format(downloads)} </p>
          <p className="bg-[#FFF0E1] py-1.5 px-2 flex items-center rounded text-[#FF8811] font-medium "><FaStar size={18} className='mr-2'/> {ratingAvg} </p>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;