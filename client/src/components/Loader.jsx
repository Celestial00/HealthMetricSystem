import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-600 border-opacity-75"></div>
    </div>
  );
};

export default Loader;
