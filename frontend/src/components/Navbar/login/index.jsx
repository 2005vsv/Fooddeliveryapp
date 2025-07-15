import React from "react";
import { uselogin } from "../../../cartcontext/logincontext";
import { userlogin } from "../../../Api2/Auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { logindispatch, email, password } = uselogin();

  const onformsubmit = async (e) => {
    e.preventDefault();
    const data = await userlogin(email, password);
    console.log({ data });

    if (data.access_token) {
      // Store token in context and localStorage
      logindispatch({
        type: "TOKEN",
        payload: {
          token: data.token,
        },
      });

      localStorage.setItem("token", data.access_token);
      navigate("/foodpage");
    } else {
      alert("Invalid email or password");
    }
  };

  const onemailchange = (e) => {
    logindispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };

  const onpasswordchange = (e) => {
    logindispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Login</h2>
      <form onSubmit={onformsubmit}>
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

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            onChange={onpasswordchange}
            type="password"
            required
            placeholder="Enter your password"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
