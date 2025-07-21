import axios from "axios";

export const userlogin = async (email, password) => {
  const url = "https://fooddeliveryapp-jtwk.onrender.com/api/auth/login";

  // Input validation
  if (!email || !password) {
    console.error("Email or password missing:", { email, password });
    return { error: "Email and password are required." };
  }

  try {
    console.log("Sending login request with:", { email, password });
    const { data } = await axios.post(url, {
      email: email.toLowerCase(),
      password,
    });

    // data: { message: "OTP sent to email", email }
    return data;
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      // Try to get the most specific error message
      const message =
        error.response.data?.error ||
        error.response.data?.msg ||
        error.response.data?.message ||
        JSON.stringify(error.response.data) ||
        "Login failed. Please try again.";

      console.error("Server responded with error:", message, "Status:", status, "Full error:", error.response.data);

      return { error: message, status };
    } else if (error.request) {
      console.error("No response received:", error.request);
      return { error: "No response from server. Please check your internet." };
    } else {
      console.error("Axios error:", error.message);
      return { error: "Something went wrong. Please try again." };
    }
  }
}

// Function to verify OTP
export const verifyOtp = async (email, otp) => {
  const url = "https://fooddeliveryapp-jtwk.onrender.com/api/auth/verify-otp";
  try {
    const { data } = await axios.post(url, { email, otp });
    // data: { token: "..." }
    return data;
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      // Try to get the most specific error message
      const message =
        error.response.data?.error ||
        error.response.data?.msg ||
        error.response.data?.message ||
        JSON.stringify(error.response.data) ||
        "OTP verification failed. Please try again.";

      console.error("Server responded with error:", message, "Status:", status, "Full error:", error.response.data);
      return { error: message, status };
    } else if (error.request) {
      console.error("No response received:", error.request);
      return { error: "No response from server. Please check your internet." };
    } else {
      console.error("Axios error:", error.message);
      return { error: "Something went wrong. Please try again." };
    }
  }
};

// Function to verify OTP
