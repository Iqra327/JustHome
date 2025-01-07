require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database Connection Failed!",error.message);
    process.exit(0);
  }
}

module.exports = connectDb;