import React, { useState } from "react";
import { supabase } from "../config/supabase/supabase.js";

import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",

  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleRegister = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      setLoading(true);

      const { error } = await supabase.auth.signUp({

        email: formData.email,
        password: formData.password,

      });

      if (error) {

        alert(error.message);
        return;

      }

      /* Save User Name */
      localStorage.setItem(
        "userName",
        `${formData.firstName} ${formData.lastName}`
      );

      alert("Account Created Successfully");

      navigate("/login");

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4">

      {/* Heading */}
      <div className="max-w-6xl mx-auto pt-8 sm:pt-10">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 text-center sm:text-left">
          Signup
        </h1>

        <div className="w-full h-[1px] bg-slate-300 mt-5"></div>

      </div>

      {/* Form */}
      <div className="flex justify-center items-center py-10 sm:py-16">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 md:p-10">

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            />

            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              onChange={handleChange}
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            />

            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
            >
              {loading ? "Loading..." : "Signup"}
            </button>

            <p className="text-center text-slate-600 text-sm sm:text-base">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-blue-600 font-semibold"
              >
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Register;