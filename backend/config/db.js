import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Successfully connected to MongoDB 👍");
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1); // stop server if DB connection fails
  }
};

export default connectDB;
