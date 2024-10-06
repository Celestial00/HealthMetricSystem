import React from 'react';

const TrendCard = ({ trend }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img src={trend.image} alt={trend.title} className="w-full h-32 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-teal-800">{trend.title}</h3>
      <p className="text-gray-600 mt-2">{trend.description}</p>
      <div className={`mt-4 text-lg font-bold ${trend.trendStatus === 'up' ? 'text-green-600' : 'text-red-600'}`}>
        Trend: {trend.trendPercentage} {trend.trendStatus === 'up' ? '↑' : '↓'}
      </div>
    </div>
  );
};

export default TrendCard;
