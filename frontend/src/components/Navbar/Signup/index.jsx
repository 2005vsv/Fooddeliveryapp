import React from "react";
import { useregister } from "../../../cartcontext/signupcontext";
import { userregister } from "../../../Api2/Authsignup";
import { useNavigate } from "react-router-dom";
// import { useregister } from "../../../cartcontext/signupcontext";
function Signup() {
  const navigate = useNavigate();
//   const useregister = useregister();
//   const { registerdispatch, name, email, password } = useregister();
const { registerdispatch, name, email, password } = useregister();

// const { name, email, password, registerdispatch } = useregister();

  const onformsubmit = async (e) => {
  e.preventDefault();
  const res = await userregister(name, email, password);
  console.log(res);

  if (res?.error) {
    alert("Signup failed: " + res.error);
  } else {
    alert("Signup successful!");
    navigate("/auth/login");
  }
};

  const onnamechange = (e) => {
    registerdispatch({
      type: "NAME",
      payload: {
        value: e.target.value,
      },
    });
  };

  const onemailchange = (e) => {
    registerdispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };

  const onpasswordchange = (e) => {
    registerdispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Signup</h2>
      <form onSubmit={onformsubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Name*
          </label>
          <input
            onChange={onnamechange}
            type="text"
            required
            placeholder="Your name"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email*
          </label>
          <input
            onChange={onemailchange}
            type="email"
            required
            placeholder="abc@gmail.com"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password*
          </label>
          <input
            onChange={onpasswordchange}
            type="password"
            required
            placeholder="Create a password"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 rounded-md"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
