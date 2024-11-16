import mongoose from 'mongoose';
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const connectDb = async () => {
  try {
    console.log("Connecting to database...");
    const connect = await mongoose.connect(String(process.env.MONGO_URI));
    
    console.log(
      "Database connected:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log("Error connecting to database:",);
    process.exit(1);
  }
};

export default connectDb;