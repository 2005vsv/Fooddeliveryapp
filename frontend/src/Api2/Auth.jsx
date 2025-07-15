import axios from "axios";

export const userlogin = async (email, password) => {
  const url = "https://fooddeliveryapp-jtwk.onrender.com/api/auth/login";

  try {
    const { data } = await axios.post(url, {
      email,
      password,
    });

    return data; // { token: "...", user: { name, email } }
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      const message =
        error.response.data?.msg || "Login failed. Please try again.";

      console.error("Server responded with error:", message);

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
