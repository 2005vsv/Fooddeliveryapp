const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Otp=require("../models/Otp");
const JWT_SECRET = "your_jwt_secret"; // store in env
const sendOtpEmail = require("../utils/sendOtpEmail")
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ msg: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashed });
    await newUser.save();

    res.status(201).json({ msg: "Signup successful" });
  } catch (err) {
    res.status(500).json({ msg: "Error signing up", err });
  }
};



const otpStore = {}; // In-memory store (move to DB/Redis in prod)

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Store in DB (replace existing)
    await Otp.deleteOne({ email });
    await Otp.create({ email, otp: otpCode });

    // Send email
    await sendOtpEmail(email, "Your OTP for Login", `Your OTP is: ${otpCode}`);

    return res.status(200).json({ message: "OTP sent to email", email });
  } catch (err) {
    console.error("Login error:", err.message);
    return res.status(500).json({ error: "Login error" });
  }
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const otpRecord = await Otp.findOne({ email });
    if (!otpRecord) {
      return res.status(400).json({ error: "OTP expired or not found" });
    }

    if (otpRecord.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    await Otp.deleteOne({ email });

    // Generate JWT
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } catch (err) {
    console.error("OTP verify error:", err.message);
    return res.status(500).json({ error: "OTP verification failed" });
  }
};

