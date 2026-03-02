// Responsibilities: Validation rules, DB operations related to user authentication (signup, login, password reset, etc.)

const User = require("../models/User");
const AppError = require("../utils/AppError");

const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// SIGN UP
exports.signup = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw new AppError("All fields are required", 400);
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError("Email already registered", 400);
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  return user;
};

// LOG IN
exports.login = async ({ email, password }) => {
  if (!email || !password) {
    throw new AppError("Email and password required", 400);
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = generateToken(user._id);

  return { user, token };
};