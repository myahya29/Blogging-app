import React from "react";
import { Link, useNavigate } from "react-router-dom";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/userSlice";

const Navbar = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  /* Redux User */
  const user = useSelector(
    (state) => state.user.user
  );

  /* Logout */
  const handleLogout = () => {

    dispatch(logoutUser());

    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-cyan-500 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-bold tracking-wide"
        >
          Personal Blogging App
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {user ? (

            <>
              {/* User Name */}
              <p className="text-white font-semibold">
                {user.name}
              </p>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-100 transition-all duration-300"
              >
                Logout
              </button>
            </>

          ) : (

            <>
              {/* Login */}
              <Link
                to="/login"
                className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
              >
                Login
              </Link>

              {/* Signup */}
              <Link
                to="/register"
                className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-100 transition-all duration-300"
              >
                Signup
              </Link>
            </>

          )}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;