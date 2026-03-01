// require("dotenv").config(); 

// const express = require('express');
// const app = express();

// // const cors = require("cors");
// // const morgan = require("morgan");
// const path = require("path");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "src/public")));

// const connectDB = require("./src/config/db");
// connectDB();

// app.get("/", (req, res) => {
//     res.send("welcome to ecommerce api");
// });

// app.listen(3000, () => {
//     console.log("server is running on port 3000");
// })

// server.js

// server.js

require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT;

// Connect to database
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});