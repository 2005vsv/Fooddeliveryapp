const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendOtpEmail = async (email, otp) => {
  const msg = {
    to: email,
    from: "vernekarvaishnav05@gmail.com", // must match verified sender
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}`,
    html: `<strong>Your OTP is: ${otp}</strong>`,
  };

  try {
    await sgMail.send(msg);
    console.log("OTP sent to", email);
  } catch (error) {
    console.error("SendGrid Error:", error);
    if (error.response) console.error(error.response.body);
    throw new Error("Failed to send OTP");
  }
};

module.exports = sendOtpEmail;
