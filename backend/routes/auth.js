const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

// User Raegistration
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: "All fields are required.!" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ msg: "User Already exists." });
  }
  const newUser = new User({ name, email, password });
  await newUser.save();
  res.status(201).json({ msg: "User Registered Successfully." });
});

// Login User

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "Invalid creditentials" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid credientials" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({
    token,
    user: { id: user._id, name: user.name, email: user.email },
  });
});

// get user
router.get("/users", async(req, res) => {
  try{
    const users = await User.find();
    res.json(users);
  }catch(err){
    res.status(500).json({msg:'Server Error', error: err.message});
  }
});


module.exports = router;
