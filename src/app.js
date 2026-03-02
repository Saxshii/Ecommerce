const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();
// built in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(morgan("dev"));

const AppError = require("./utils/AppError");
app.get("/error-test", (req, res, next) => {
  next(new AppError("Test error working", 400));
});

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);



// Test route
app.get("/", (req, res) => {
  res.send("E-commerce API is running");
});


const errorHandler = require("./middleware/errorMiddleware");

app.use(errorHandler);

module.exports = app;