// backend/utils/sendOtpEmail.js
const sgMail = require("@sendgrid/mail");

// Set the SendGrid API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Sends an OTP email to the specified user.
 * @param {string} email - The recipient's email address.
 * @param {string} otp - The OTP code to send.
 */
const sendOtpEmail = async (email, otp) => {
  const msg = {
    to: email,
    from: "vernekarvaishnav05@gmail.com", // Must be a verified sender in SendGrid
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}`,
    html: `<p>Your OTP is: <strong>${otp}</strong></p>`,
  };

  try {
    await sgMail.send(msg);
    console.log(`✅ OTP email sent to ${email}`);
  } catch (error) {
    console.error("❌ SendGrid Error:", error.message);
    if (error.response?.body?.errors) {
      console.error("Details:", error.response.body.errors);
    }
    throw new Error("Failed to send OTP email");
  }
};

module.exports = sendOtpEmail;
