import mongoose from "mongoose";
import prodModel from "../model/product.js";
import products from "./product.js";
import dotenv from "dotenv";

dotenv.config({path:"../.env"});

async function seed() {
    await mongoose.connect(process.env.MONGO_URI);

    await prodModel.insertMany(products);

    console.log("products inserted");
    process.exit();
}

seed();