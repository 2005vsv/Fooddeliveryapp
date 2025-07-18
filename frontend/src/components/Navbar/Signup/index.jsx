import React, { useState, useEffect } from "react";
import { useregister } from "../../../cartcontext/signupcontext";
import { userregister } from "../../../Api2/Authsignup";
import { useNavigate } from "react-router-dom";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import { auth, provider } from "../../../config/firebase";

function Signup() {
  const navigate = useNavigate();
  const { registerdispatch, name, email, password } = useregister();
  const [loading, setLoading] = useState(false);

  // Handle Google redirect result
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          const user = result.user;
          localStorage.setItem("user", JSON.stringify({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          }));
          navigate("/foodpage");
        }
      })
      .catch((error) => {
        console.error("Redirect result error:", error);
      });
  }, []);

  const onformsubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await userregister(name, email, password);
      console.log("Signup response:", res);

      if (res?.error) {
        alert("Signup failed: " + res.error);
        setLoading(false);
      } else {
        alert("Signup successful! Redirecting to login...");
        setTimeout(() => {
          setLoading(false);
          navigate("/auth/login");
        }, 100);
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong!");
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (err) {
      console.error("Google signup failed", err);
      alert("Google signup failed");
    }
  };

  const onnamechange = (e) => {
    registerdispatch({
      type: "NAME",
      payload: { value: e.target.value },
    });
  };

  const onemailchange = (e) => {
    registerdispatch({
      type: "EMAIL",
      payload: { value: e.target.value },
    });
  };

  const onpasswordchange = (e) => {
    registerdispatch({
      type: "PASSWORD",
      payload: { value: e.target.value },
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-lg font-bold text-gray-700 mb-4">
        Create an Account
      </h2>
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
            value={name}
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
            value={email}
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
            value={password}
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

      <div className="mt-4">
        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 text-sm text-gray-700 py-2 rounded-md hover:bg-gray-100 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google"
            className="w-5 h-5"
          />
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

export default Signup;
