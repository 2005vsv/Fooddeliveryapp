import axios from "axios";

export const userregister = async (name, email, password) => {
  const url = "https://fooddeliveryapp-jtwk.onrender.com/api/auth/signup";
  try {
    const { data } = await axios.post(url, {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    return { error: error.response?.data?.message || "Signup failed" };
  }
};
