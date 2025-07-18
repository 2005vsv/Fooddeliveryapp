const sgMail = require("@sendgrid/mail");

if (!process.env.SENDGRID_API_KEY) {
  console.error("❌ SENDGRID_API_KEY not found in environment variables");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendOtpEmail = async (email, otp) => {
  const msg = {
    to: email,
    from: process.env.SENDER_EMAIL,
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
