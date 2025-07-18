import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailMissing, setEmailMissing] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      setEmailMissing(true);
    }
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Email missing. Please login again.");
      navigate("/login");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://fooddeliveryapp-jtwk.onrender.com/api/auth/verify-otp",
        {
          email: email.toLowerCase(),
          otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { token } = res.data;
      localStorage.setItem("token", token);
      navigate("/foodpage");
    } catch (err) {
      console.error("OTP verification error:", err);
      alert(err.response?.data?.error || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  if (emailMissing) {
    return (
      <div className="text-center text-red-500 mt-10">
        Email is missing. Please <a href="/login" className="underline text-blue-600">login again</a>.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow p-6 rounded">
      <h2 className="text-lg font-bold mb-4">Enter OTP sent to {email}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border p-2 w-full mb-4 rounded"
          placeholder="Enter OTP"
          required
        />
        <button
          type="submit"
          disabled={loading || otp.length === 0}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
};

export default OtpVerify;
