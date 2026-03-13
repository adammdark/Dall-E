import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

const connectDB = async () => {

    if(!DB_URI) {
        throw new Error("Please provide DB_URI in the environment variables");
    }

    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(DB_URI);
        console.log("MongoDB connected");

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;