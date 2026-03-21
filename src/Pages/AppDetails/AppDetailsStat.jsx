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
    <div className="stats">
      <div className="stat">
        <div className="stat-title"><LuDownload className='h-10 w-10 text-purple-700' /></div>
        <div className='text-gray-600 dark:text-gray-400'>Downloads</div>
        <div className="stat-value text-primary">
          {formatter.format(downloads)}
        </div>
      </div>

      <div className="stat">
        <div className="stat-title"><FaStar className='h-10 w-10 text-[#FF8811]' /></div>
        <div className='text-gray-600 dark:text-gray-400'>Average Ratings</div>
        <div className="stat-value text-primary">{ratingAvg}</div>
      </div>

      <div className="stat">
        <div className="stat-title"><MdReviews className='h-10 w-10 text-purple-700' /></div>
        <div className='text-gray-600 dark:text-gray-400'>Total Reviews</div>
        <div className="stat-value text-primary">{formatter.format(reviews)}</div>
      </div>
    </div>
  );
};

export default AppDetailsStat;