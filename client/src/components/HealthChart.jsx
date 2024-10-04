import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HealthChart = () => {
  // Data for the chart
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // Days of the week
    datasets: [
      {
        label: 'Heart Rate (bpm)',
        data: [60, 90, 75, 85, 72, 110, 68], // Varying heart rate data
        borderColor: '#FF6384', // Color for heart rate line (red)
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Background color with transparency
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: 'Blood Pressure (mmHg)',
        data: [130, 145, 118, 121, 170, 140, 124], // Varying blood pressure data
        borderColor: '#36A2EB', // Color for blood pressure line (blue)
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Background color with transparency
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: 'Sugar Levels (mg/dL)',
        data: [80, 95, 105, 110, 115, 100, 92], // Varying sugar levels data
        borderColor: '#FFCE56', // Color for sugar levels line (yellow)
        backgroundColor: 'rgba(255, 206, 86, 0.2)', // Background color with transparency
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top', // Position of the legend
      },
    },
    scales: {
      y: {
        min: 50, // Set the minimum value for y-axis
        max: 180, // Set the maximum value for y-axis
        title: {
          display: true,
          text: 'Health Metrics',
        },
      },
    },
  };

  return (
    <section className="bg-teal-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-700 text-center mb-8">Health Metrics This Week</h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <Line data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default HealthChart;
