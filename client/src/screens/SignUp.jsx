// SignUp.js
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    // Perform sign-up logic (e.g., API call)
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        console.log('Signing up', { name, email, password });
        setErrorMessage('');
        // Redirect to sign-in page or dashboard after successful sign-up
      } else {
        setErrorMessage("Passwords don't match.");
      }
    } else {
      setErrorMessage('Please fill in all fields.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-4">Sign Up</h2>
        {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
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
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2">Password:</label>
            <div className="flex items-center border border-gray-300 rounded">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 rounded-l" // Remove border on left side for the icon
              />
              <span 
                className="flex items-center justify-center p-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2">Confirm Password:</label>
            <div className="flex items-center border border-gray-300 rounded">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  // Check if passwords match
                  if (e.target.value !== password) {
                    setErrorMessage("Passwords don't match.");
                  } else {
                    setErrorMessage('');
                  }
                }}
                required
                className="w-full p-2 rounded-l" // Remove border on left side for the icon
              />
              <span 
                className="flex items-center justify-center p-2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
