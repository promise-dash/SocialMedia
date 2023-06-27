import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

const router = express.Router();

router.post("/register", async (req, res) => {

    const { firstname, lastname, username, password } = req.body;

    try {
        const userAlreadyExist = await UserModel.findOne({ username });

        if(userAlreadyExist){
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            firstname,
            lastname,
            username,
            password: hashedPassword,
        });
        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post("/login", async (req, res) => {
    
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username });

        if (user) {
            const isValidPassword = await bcrypt.compare(password, user.password);

            if (!isValidPassword) {
                return res.status(400).json({message: "Wrong Password"});
            }
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });

            res.status(200).json({ token });
        } 
        else {
            res.status(404).json({message: "User not found"});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export { router as authRoute };
