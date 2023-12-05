import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a href="#add-student" className="mr-5 hover:text-gray-200">Add Student</a>
          <a href="#remove-student" className="mr-5 hover:text-gray-200">Remove Student</a>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className="ml-3 text-xl">Lehman College</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;