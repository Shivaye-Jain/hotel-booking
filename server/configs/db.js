import mongoose from "mongoose";

mongoose.connection.on("connected", () => {
  console.log("✅ Database connected");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ Database connection error:", err);
});

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "hotel-booking", // optional if already in URI
    });
  } catch (error) {
    console.error("❌ DB connection failed:", error.message);
  }
};

export default connectDB;
