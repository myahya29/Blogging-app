import React, { useState } from "react";
import { supabase } from "../config/supabase/supabase.js";

import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";

const Login = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      /* Redux Store */
      dispatch(
        loginUser({
          name: localStorage.getItem("userName"),
          email: formData.email,
        })
      );

      alert("Login Successful");

      navigate("/");

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 pt-10">

        <h1 className="text-5xl font-bold text-slate-800">
          Login
        </h1>

        <div className="w-full h-[1px] bg-slate-300 mt-5"></div>

      </div>

      {/* Form */}
      <div className="flex justify-center items-center mt-20 px-4">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-10">

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300"
            />

            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition-all duration-300"
            >
              {loading ? "Loading..." : "Login"}
            </button>

            <p className="text-center text-slate-600">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="text-blue-600 font-semibold"
              >
                Signup
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;