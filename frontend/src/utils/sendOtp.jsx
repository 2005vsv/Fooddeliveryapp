const sgMail = require("@sendgrid/mail");

sgMail.setApiKey('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'); // from .env

const sendOtpEmail = async (email, otp) => {
  const msg = {
    to: email,
    from: "your_verified_sender@example.com", // must be verified in SendGrid
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}`,
    html: `<p>Your OTP is <strong>${otp}</strong></p>`,
  };

  await sgMail.send(msg);
};

module.exports = sendOtpEmail;
