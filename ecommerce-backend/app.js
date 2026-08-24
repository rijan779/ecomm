import express from "express"
import router from "./routes/routes.js";
import prodRouter from "./routes/prod.route.js";
import axios from "axios";
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express();


app.use(cors({
    origin:["http://localhost:5173", "http://localhost:5174"],
    credentials:true
}))             


// parse JSON and urlencoded request bodies
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use("/api/auth",router)
app.use("/api/products",prodRouter)

export default app

