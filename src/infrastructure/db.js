import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectionString ="mongodb+srv://PraveenRandula:praveenDB2005@cluster0.trcs9.mongodb.net/dev?retryWrites=true&w=majority&appName=Cluster0";
        if (!connectionString) {
            throw new Error("Please add the connection string")
        }
        await mongoose.connect(connectionString);
        console.log("DB connections successful!");
    } catch (error) {
        console.log(error);
        console.log("DB connections failed!");
        console.log(error);
    }
}   