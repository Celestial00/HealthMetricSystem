import React from 'react';

const Metrics = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-700 text-center mb-8">Your Health Metrics</h2>
        
        {/* Four Boxes for Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Blood Pressure */}
          <div className="bg-teal-600 text-white rounded-[10px] p-6 cursor-pointer hover:bg-teal-700 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Blood Pressure</h3>
            <p className="text-lg">120/80 mmHg</p>
          </div>

          {/* Sugar Levels */}
          <div className="bg-teal-600 text-white rounded-[10px] p-6 cursor-pointer hover:bg-teal-700 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Sugar Levels</h3>
            <p className="text-lg">98 mg/dL</p>
          </div>

          {/* Medication Intake */}
          <div className="bg-teal-600 text-white rounded-[10px] p-6 cursor-pointer hover:bg-teal-700 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Medication Intake</h3>
            <p className="text-lg">Lisinopril - 10mg</p>
          </div>

          {/* Heart Rate */}
          <div className="bg-teal-600 text-white rounded-[10px] p-6 cursor-pointer hover:bg-teal-700 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Heart Rate</h3>
            <p className="text-lg">72 bpm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
