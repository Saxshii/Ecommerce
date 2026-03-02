// Responsibilities: Handle incoming HTTP requests related to authentication (signup, login, etc.) and send appropriate responses.

const authService = require("../services/authService");

exports.signup = async (req, res, next) => {
  try {
    const user = await authService.signup(req.body);

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { user, token } = await authService.login(req.body);

    res.status(200).json({
      status: "success",
      token,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};