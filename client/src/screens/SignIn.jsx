// SignIn.js
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie"; // Import the js-cookie library
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Perform sign-in logic (e.g., API call)
    if (email && password) {
      setErrorMessage(""); // Clear any previous error messages

      try {
        const response = await fetch("http://localhost:3300/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          setErrorMessage(errorData.message); // Set error message from the server
          return;
        }

        const data = await response.json();
        console.log("Sign-in successful:", data);
        Cookies.set("userId", data.userId, { expires: 30 });
        Navigate(`/home/${data.userId}`);
      } catch (error) {
        console.error("Error during sign-in:", error);
        setErrorMessage("An error occurred during sign-in."); // Set generic error message
      }
    } else {
      setErrorMessage("Please enter both email and password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-4">
          Sign In
        </h2>
        {errorMessage && (
          <p className="text-red-500 text-sm text-center">{errorMessage}</p>
        )}
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password:</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded pr-10" // Add padding to the right for the icon
              />
              <button
                type="button"
                className="absolute right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
          >
            Sign In
          </button>
       <Link to='/signup' >    <p className=" text-center mt-4 cursor-pointer hover:text-teal-700 ">Not Signed In Yet? click here! </p> </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
