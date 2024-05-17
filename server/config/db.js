import mongoose from "mongoose";

export const connectDB  = async () => {
     await mongoose.connect("mongodb+srv://burgerresortpk:burgerresort1122@cluster0.l5zb0cf.mongodb.net/test").then(()=> console.log("DB Connected"));
}