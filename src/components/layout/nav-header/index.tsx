import React from "react";
import { Link } from "gatsby";

const NavHeader = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2">🚀</span> JobBoard
        </Link>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-indigo-200 transition-colors">
            Home
          </Link>
          <Link to="/jobs" className="hover:text-indigo-200 transition-colors">
            Jobs
          </Link>
          {/* ://TODO: Add post functionality */}
          {/* <Link to="#" className="hover:text-indigo-200 transition-colors">
            Post a Job
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default NavHeader;
