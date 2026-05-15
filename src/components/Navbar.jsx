import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-cyan-500 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-white text-2xl font-bold tracking-wide"
        >
          Personal Blogging App
        </Link>

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-100 transition-all duration-300"
          >
            Signup
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;