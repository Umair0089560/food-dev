import mongoose from "mongoose";

export const connectDB  = async () => {
     await mongoose.connect("mongodb+srv://seejutt123456:Seejutt1379@cluster0.siti61r.mongodb.net/food-del").then(()=> console.log("DB Connected"));
}