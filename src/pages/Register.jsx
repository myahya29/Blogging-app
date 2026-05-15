import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        
        <h1 className="text-5xl font-bold text-slate-800">
          Signup
        </h1>

        <div className="w-full h-[1px] bg-slate-300 mt-5"></div>
      </div>

      {/* Form */}
      <div className="flex justify-center items-center mt-16 px-4">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">

          <form className="space-y-5">

            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-violet-300"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-violet-300"
            />

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

            <input
              type="password"
              placeholder="Repeat Password"
              className="w-full border border-slate-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-violet-300"
            />

            {/* Upload Image */}
            <div>
              <label className="block mb-2 text-slate-700 font-medium">
                Upload Profile Picture
              </label>

              <input
                type="file"
                className="w-full border border-slate-300 rounded-lg p-2 cursor-pointer"
              />
            </div>

            <button
              className="w-full bg-gradient-to-r from-violet-600 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Signup
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Register;