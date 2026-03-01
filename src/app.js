// src/app.js

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();


// ===== MIDDLEWARE =====

// Parse JSON
app.use(express.json());

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Logger
app.use(morgan("dev"));

// Static files
app.use(express.static(path.join(__dirname, "public")));


// ===== TEST ROUTE =====

app.get("/", (req, res) => {
  res.send("E-commerce API is running");
});


module.exports = app;