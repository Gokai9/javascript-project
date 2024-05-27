// blog_app/config/db.js
const mongoose = require('mongoose')
require('dotenv').config();
const url = process.env.MONGODB

function connectDB() {

  try {
    mongoose.connect(url);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected:`);
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}

module.exports = connectDB