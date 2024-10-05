import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Hero = () => {
  const [userId, setUserId] = useState(null); // State to store user ID from cookie
  const [userData, setUserData] = useState(null); // State to store fetched user data
  const [error, setError] = useState(""); // State to store any error messages

  // Effect to retrieve user ID from cookie
  useEffect(() => {
    const id = Cookies.get("userId");
    if (id) {
      setUserId(id);
    }
  }, []);

  // Effect to fetch user data only after userId is set
  useEffect(() => {
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  // Function to fetch user data based on userId
  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:3300/api/user/${userId}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
      setError(""); // Clear any previous errors

      // Log userData after it's set
      console.log("Fetched User Data:", data);
    } catch (err) {
      setError(err.message || "Error fetching user data");
      setUserData(null); // Clear any previous user data in case of error
    }
  };

  return (
    <section className="bg-teal-50 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left: User Icon */}
        <div className="md:w-1/2 flex justify-center flex-col item md:justify-start mb-8 md:mb-0">
          <FaUserCircle className="text-teal-600 text-9xl" />
          {/* Conditionally render user name only if userData is available */}
          {userData && <h3 className="text-xl font-semibold">Welcome, {userData.name}</h3>}
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
            <li className="list-none">Medication</li>
            <li className="list-none">Doctor Appointments</li>
            <li className="list-none">Exercise</li>
          </ul>
          <Link to={`/logs/${userId}`}>
            <button className="bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-teal-700 transition duration-300">
              Start Logging Now
            </button>
          </Link>

          
          <Link to={`/reminder/${userId}`}>
          <button className="bg-white ml-3 border-[1px] text-teal-600 font-semibold py-2 px-6 rounded-lg hover:text-white hover:bg-teal-500 transition duration-300">
              Set A Reminder
            </button>

          </Link>

          {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
