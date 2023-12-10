require("dotenv").config();
const mongoose = require("mongoose");

const dbUri = process.env.DB_URI;

mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db is connected successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });
