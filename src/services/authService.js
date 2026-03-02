// Responsibilities: Validation rules, DB operations related to user authentication (signup, login, password reset, etc.)

const User = require("../models/User");
const AppError = require("../utils/AppError");

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