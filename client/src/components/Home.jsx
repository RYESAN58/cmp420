import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Lehman College instructor Portal</h1>
        <p className="mb-4">Manage Instructor records and data with ease.</p>
        <div className="space-x-4">
          <Link to="/view" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View instructors
          </Link>
          <Link to="/add" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add instructor
          </Link>
          <Link to="/remove" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Remove instructor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
