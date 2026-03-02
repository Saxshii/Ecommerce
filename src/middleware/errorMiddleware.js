const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
  status: err.status || "error",
  message: message,
  stack: err.stack,   // ← ADD THIS TEMP
});
};

module.exports = errorHandler;