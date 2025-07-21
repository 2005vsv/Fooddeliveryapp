import React, { useState } from "react";
import { uselogin } from "../../../cartcontext/logincontext";
import { userlogin } from "../../../Api2/Auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { logindispatch, email, password } = uselogin();
  const [loading, setLoading] = useState(false);

  const onformsubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Trying to login with:", email, password); // Debug

    try {
      const data = await userlogin(email, password);
      console.log("Login response:", data);

      if (data?.token) {
        logindispatch({
          type: "TOKEN",
          payload: {
            token: data.token,
            user: data.user,
          },
        });

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        setTimeout(() => {
          setLoading(false);
          // Inside your onformsubmit try block
          navigate("/auth/verify-otp", { state: { email } });
        }, 100);
      } else {
        setLoading(false);
        alert("Invalid email or password. Please check and try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setLoading(false);
      alert("Error during login. Please try again.");
    }
  };

  const onemailchange = (e) => {
    logindispatch({
      type: "EMAIL",
      payload: { value: e.target.value },
    });
  };

  const onpasswordchange = (e) => {
    logindispatch({
      type: "PASSWORD",
      payload: { value: e.target.value },
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
            value={email}
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
            value={password}
            placeholder="Enter your password"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 cursor-pointer rounded-md"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-4 text-sm text-center">
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/auth/signup")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Sign up
        </span>
      </p>
    </div>
  );
}

export default Login;
