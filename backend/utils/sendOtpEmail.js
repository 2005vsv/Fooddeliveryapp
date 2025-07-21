const nodemailer = require("nodemailer");
require('dotenv').config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

/**
 * Send an OTP email using Nodemailer.
 * @param {string} email - Recipient's email address
 * @param {string|number} otp - OTP code
 * @param {string} [subject] - Optional subject
 * @param {string} [body] - Optional body (if not provided, uses default)
 */
async function sendOtpEmail(email, otp, subject, body) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject || "Your OTP Code",
    text: body || `Your OTP code is: ${otp}`,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error("Error sending OTP email:", err);
    throw new Error("Failed to send OTP email");
  }
}

module.exports = sendOtpEmail;