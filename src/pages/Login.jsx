import React from "react";

const Login = () => {
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

        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">

          <form className="space-y-5">

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-violet-300"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-violet-300"
            />

            <button
              className="w-full bg-gradient-to-r from-violet-600 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;