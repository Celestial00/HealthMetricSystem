import React from 'react';
import TrendCard from '../components/TrendCard';

const TrendsPage = () => {
  const trends = [
    {
      id: 1,
      title: "Flu Season",
      description: "Increased flu cases reported this week, with local hospitals seeing a surge in patients presenting flu-like symptoms. Vaccination efforts are crucial this season.",
      trendPercentage: "15%",
      trendStatus: "up",
      image: "https://via.placeholder.com/400x200/1abc9c/ffffff?text=Flu+Season", // Placeholder image
    },
    {
      id: 2,
      title: "COVID-19 Variants",
      description: "New variants showing resistance to vaccines, prompting health officials to recommend booster shots. Continuous monitoring and updates on vaccine effectiveness are essential.",
      trendPercentage: "20%",
      trendStatus: "down",
      image: "https://via.placeholder.com/400x200/e74c3c/ffffff?text=COVID-19+Variants", // Placeholder image
    },
    {
      id: 3,
      title: "Mental Health Awareness",
      description: "A noticeable rise in consultations for mental health issues following recent global events. This trend emphasizes the need for accessible mental health resources and support.",
      trendPercentage: "10%",
      trendStatus: "up",
      image: "https://via.placeholder.com/400x200/3498db/ffffff?text=Mental+Health+Awareness", // Placeholder image
    },
    {
      id: 4,
      title: "Heart Disease Awareness",
      description: "Public campaigns focusing on heart health, leading to an increase in screenings and awareness about lifestyle changes. Early detection is key to prevention.",
      trendPercentage: "5%",
      trendStatus: "down",
      image: "https://via.placeholder.com/400x200/f1c40f/ffffff?text=Heart+Disease+Awareness", // Placeholder image
    },
  ];

  const userInsights = [
    {
      id: 1,
      insight: "Your average heart rate has increased by 5 bpm over the last week, suggesting increased activity or stress levels.",
    },
    {
      id: 2,
      insight: "You've logged 30% more sleep this week compared to the previous month, contributing positively to your mental well-being.",
    },
    {
      id: 3,
      insight: "Regular physical activity has resulted in a 10% decrease in reported stress levels over the last month.",
    },
    {
      id: 4,
      insight: "Your hydration levels appear to be consistent, which is crucial for maintaining optimal health.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-teal-600 p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Daily Health Trends</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Understanding Trends in Medicine</h2>
        <p className="text-gray-600 mt-2">
          Medicine is constantly evolving, with new research and studies shedding light on various diseases and health conditions. 
          Tracking trends in illnesses can provide valuable insights into public health, allowing healthcare professionals to better 
          prepare and respond to outbreaks, emerging health issues, and changing patient needs. This page presents daily trends 
          and insights regarding different sicknesses and illnesses, showcasing the importance of ongoing medical research and awareness.
        </p>
      </div>
      
      {/* User Insights Section */}
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Your Health Insights</h2>
        <div className="mt-4 space-y-2">
          {userInsights.map((insight) => (
            <p key={insight.id} className="text-gray-600">
              - {insight.insight}
            </p>
          ))}
        </div>
      </div>
      
      {/* Trends Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {trends.map((trend) => (
          <TrendCard key={trend.id} trend={trend} />
        ))}
      </div>
    </div>
  );
};

export default TrendsPage;
