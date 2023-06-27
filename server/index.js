import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { authRoute } from "./routes/authRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


//Database Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


//Routes
app.use("/auth", authRoute);


app.listen(3001, () => {
    console.log('Server is running!');
})