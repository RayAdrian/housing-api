const logger = require("../utils/logger");

module.exports = (err, req, res, next) => {
  // Log error
  logger.error(`${err.message}`);

  // Default to 500 server error
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    error: err.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
};
