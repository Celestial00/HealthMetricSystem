import React from "react";
import { FaHeartbeat } from "react-icons/fa"; 
import {Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white ">
      <div className="container mx-auto  py-4 flex justify-between ">
      
        <div className="flex items-center">
          <FaHeartbeat className="text-teal-600 text-3xl mr-2" />
          <span className="text-2xl font-semibold text-teal-600">
            HealthCarePro
          </span>
        </div>

 
        <div>
        <Link to={'/logs'}>  <button className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300">
            Take Patient Metrics
          </button></Link>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
