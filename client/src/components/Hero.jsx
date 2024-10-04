import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Importing user icon from react-icons
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-teal-50 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left: User Icon */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <FaUserCircle className="text-teal-600 text-9xl" />
        </div>

        {/* Right: Patient Information and Features */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-teal-700 mb-4">
            Log Your Daily Health Metrics
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Stay on top of your health by logging daily metrics such as blood
            sugar levels, blood pressure, and medication intake. Receive
            reminders for:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li className=" list-none">Medication</li>
            <li className=" list-none">Doctor Appointments</li>
            <li className=" list-none">Exercise</li>
          </ul>
          <Link to={"/logs"}>
            {" "}
            <button className="bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-teal-700 transition duration-300">
              Start Logging Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
