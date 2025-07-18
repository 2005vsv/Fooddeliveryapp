import React, { useState } from "react";
import { useregister } from "../../../cartcontext/signupcontext";
import { userregister } from "../../../Api2/Authsignup";
import { useNavigate } from "react-router-dom";


function Signup() {
  const navigate = useNavigate();
  const { registerdispatch, name, email, password } = useregister();
  const [loading, setLoading] = useState(false);

  const onformsubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await userregister(name, email, password);
      if (res?.error) {
        alert("Signup failed: " + res.error);
      } else {
        alert("Signup successful!");
        navigate("/auth/login");
      }
    } catch (err) {
      alert("Something went wrong!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  

  const onnamechange = (e) => {
    registerdispatch({ type: "NAME", payload: { value: e.target.value } });
  };

  const onemailchange = (e) => {
    registerdispatch({ type: "EMAIL", payload: { value: e.target.value } });
  };

  const onpasswordchange = (e) => {
    registerdispatch({ type: "PASSWORD", payload: { value: e.target.value } });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-lg font-bold text-gray-700 mb-4">
        Create an Account
      </h2>

      <form onSubmit={onformsubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Name*
          </label>
          <input
            onChange={onnamechange}
            type="text"
            value={name}
            required
            placeholder="Your name"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email*
          </label>
          <input
            onChange={onemailchange}
            type="email"
            value={email}
            required
            placeholder="abc@gmail.com"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password*
          </label>
          <input
            onChange={onpasswordchange}
            type="password"
            value={password}
            required
            placeholder="Create a password"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 rounded-md"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/auth/login")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Sign in
        </span>
      </p>

      
    </div>
  );
}

export default Signup;
