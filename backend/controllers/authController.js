const User = require('../model/user');
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/sendEmail');
const jwt = require('jsonwebtoken');

  const generateToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
  }

  //Register a new user
  const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User already exists'
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpiry,
      verified: false,
    });

      // --- CREATE THE MESSAGE VARIABLE HERE ---
      const message = `Welcome to Healthizone ${name}!\n\nThank you for registering. Your OTP is ${otp}. It will expire in 10 minutes.`;

      await sendEmail({
        email: user.email,
        to: user.email,
        subject: 'Healthizone - Verify your email',
        message,
        text: message,
      });

      res.status(201).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          verified: user.verified,
          token: generateToken(user.id),
        });
      }
    
    catch(error) {
      res.status(400).json({message: "Error registering user", error: error.message});
    }
  };

  const loginUser = async (req, res) => {
    try {
          const { email, password } = req.body;
          const user = await User.findOne({ email });
          if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
              _id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
              verified: user.verified,
              token: generateToken(user.id),
            });
          } else {
            res.status(401).json({ message: 'Invalid email or password' });
          }
    } catch (error) {
      res.status(400).json({ message: 'Error logging in user', error: error.message });
    }
  };

  const getUsers = async (req, res) => {
    try {
      const users = await User.find().select('-password'); // Exclude password from the response
      res.json(users);
    }
    catch (error) {
      res.status(400).json({ message: 'Error fetching users', error: error.message });
    }
  };

  module.exports = {
    registerUser,
    loginUser,
    getUsers
  };