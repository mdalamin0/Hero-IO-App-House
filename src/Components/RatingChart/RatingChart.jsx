import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const RatingChart = ({ appData }) => {
  const ratingChartData = appData.ratings.map(rating => {
    const ratingChart = {
      name: rating.name,
      count: rating.count
    }
    return ratingChart;
  }).sort((a, b) => parseInt(b.name) - parseInt(a.name));
  


  return (
    <>
    <h2 className='text-3xl font-bold mt-10'>Ratings</h2>
    <div className="w-full h-[420px]  p-6 rounded-xl">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ratingChartData}
          layout="vertical"
        >
          <XAxis
            type="number"
          />
          <YAxis
            type="category"
            dataKey="name"
          />
          <Tooltip labelStyle={{ color:"black"}} />
          <Legend />
          <Bar
            dataKey="count"
            fill="#10B981"
            barSize={25}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </>
     
  );
};

export default RatingChart;