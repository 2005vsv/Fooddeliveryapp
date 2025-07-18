const sgMail = require("@sendgrid/mail");
const dotenv=require("dotenv");
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, text) => {
  const msg = {
    to,
    from: process.env.SENDER_EMAIL,
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log("✅ Email sent to", to);
  } catch (error) {
    console.error("❌ Email error:", error.response?.body || error.message);
    throw new Error("Failed to send OTP email");
  }
};

module.exports = sendEmail;
