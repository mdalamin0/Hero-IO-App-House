import React from 'react';

const AppsPageHeading = ({title, des}) => {
  return (
    <div className='text-center space-y-4 mt-16'>
      <h2 className='text-4xl font-bold '>{title}</h2>
      <p className='text-gray-600 dark:text-gray-400'>{des}</p>
    </div>
  );
};

export default AppsPageHeading;