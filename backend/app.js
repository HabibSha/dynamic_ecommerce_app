require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

// Import Routers from Routes Folder
const productRouters = require("./routes/productRouters");
const userRouter = require("./routes/userRouter");
const orderRouter = require("./routes/orderRouter");

const app = express();

const port = process.env.PORT || 4000;

// Form Url Encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie Parser
app.use(cookieParser());

// Database
require("./config/database");

// Router
app.use("/api/v1", productRouters);
app.use("/api/v1", userRouter);
app.use("/api/v1", orderRouter);

// Route not found Error
app.use((req, res, next) => {
  res.status(404).json("Router not found!");
});

// Server Error
app.use((err, req, res, next) => {
  res.status(500).json("Something broke");
  process.exit(1);
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});

module.exports = app;
