const usermodel = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const loginuser = async (req, res) => {
  const { email, password } = req.body;

  const user = await usermodel.findOne({ email: email });
  if (!user) {
    return res.status(400).send("user does not exist");
  }
  const ispasswordmatchingfromdb = await bcryptjs.compare(
    password,
    user.password
  );
  if (ispasswordmatchingfromdb) {
    const token = jwt.sign({ userId: user._id }, "randomsecret");
    return res.status(200).json({
      user: user,
      token: token,
    });
  }
  return res.status(400).send("Incorrect login credentials");
};

const signupuser = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).send("The passwords don't match");
    }
    if (password.length < 8) {
      return res.status(400).send("create a stronger password");
    }

    const userexists = await usermodel.findOne({ email: email });
    if (!userexists) {
      const hashedpassword = await bcryptjs.hash(password, 10);
      const user = new usermodel({
        name: name,
        email: email,
        password: hashedpassword,
      });
      const saveduser = await user.save();
      const token = jwt.sign({ userId: saveduser._id }, "randomsecret");
      return res.status(200).json({
        token: token,
        user: saveduser,
      });
    } else {
      return res.status(400).send("user already exists");
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { loginuser, signupuser };
