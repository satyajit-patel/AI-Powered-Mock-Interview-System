// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;