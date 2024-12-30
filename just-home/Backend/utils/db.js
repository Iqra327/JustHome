const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to the database!"))
    .catch((error) => {
      console.error("Database connection failed:", error.message);
      console.error("Full error details:", error);
    });
};

module.exports = dbConnection;