import React from 'react';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";

const AppDetailsStat = ({ appData }) => {
  const { downloads, ratingAvg, reviews } = appData;
  const formatter = new Intl.NumberFormat("en-US", {
    notation: 'compact',
    compactDisplay: 'short'
  })

  return (
    <div className='flex justify-between items-center'>

      <div className="stats">
        <div className="stat">
          <div><LuDownload className='h-10 w-10 text-purple-700' /></div>
          <div className="stat-title text-lg">Downloads</div>
          <div className="stat-value text-primary">
            {formatter.format(downloads)}
          </div>
        </div>

        <div className="stat">
          <div><FaStar className='h-10 w-10 text-[#FF8811]' /></div>
          <div className="stat-title text-lg">Average Ratings</div>
          <div className="stat-value text-primary">{ratingAvg}</div>
        </div>

        <div className="stat">
          <div><MdReviews className='h-10 w-10 text-purple-700' /></div>
          <div className="stat-title text-lg">New Registers</div>
          <div className="stat-value text-primary">{formatter.format(reviews)}</div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsStat;