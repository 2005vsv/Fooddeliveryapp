const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "your_jwt_secret"; // store in env

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

const sendOtpEmail = require("../utils/sendOtpEmail")

const otpStore = {}; // In-memory store (move to DB/Redis in prod)

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ msg: "Invalid password" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = otp;

    await sendOtpEmail(email, otp);

    res.status(200).json({ msg: "OTP sent", email });
  } catch (err) {
    res.status(500).json({ msg: "Login error", err });
  }
};

exports.verifyOtp = (req, res) => {
  const { email, otp } = req.body;
  const storedOtp = otpStore[email];

  if (storedOtp && storedOtp === otp) {
    delete otpStore[email]; // clear after use
    const token = jwt.sign({ userId: email }, JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({ msg: "OTP verified", token });
  } else {
    res.status(401).json({ msg: "Invalid OTP" });
  }
};

