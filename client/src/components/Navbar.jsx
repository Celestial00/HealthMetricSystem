import React from "react";
import { FaHeartbeat } from "react-icons/fa"; 
import {Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';


const Navbar = (params) => {

  const Navigate = useNavigate()
  const HandleSignOut = () =>{
    Cookies.remove("userId");
    Navigate('/')
  }

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
   

          <Link to={`/trends`}>  <button className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300">
            Trends
          </button></Link>

          <button className="bg-teal-600 text-white font-semibold ml-1 py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300" onClick={HandleSignOut} >
            Sign Out
          </button>
        
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;
