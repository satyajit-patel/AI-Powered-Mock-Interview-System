import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            AI Mock Interview
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-indigo-200">
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
