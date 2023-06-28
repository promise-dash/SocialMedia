import express from "express";
import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

//GET A USER
router.get("/:id", async(req, res) => {
    const userId = req.params.id;

    try {
        const user = await UserModel.findById(userId);

        if(user){
            const { password, ...otherDetails } = user._doc;
            res.status(200).json(otherDetails);
        }
        else{
            res.status(200).json("No such user exists");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});


//GET ALL USERS
router.get("/", async(req, res) => {

    try {
        let users = await UserModel.find();
        users = users.map((user)=>{
            const {password, ...otherDetails} = user._doc
            return otherDetails;
        });

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});


//UPDATE A USER
router.put("/:id", async(req, res) => {
    const userId = req.params.id;
    const { currentUserId, password } = req.body;

    if(userId === currentUserId){
        try {
            if (password) {
                req.body.password = await bcrypt.hash(password, 10);
            }

            const updatedUser = await UserModel.findByIdAndUpdate(userId, req.body, {new: true});

            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else{
        res.status(200).json("Access Denied!");
    }
});


//FOLLOW A USER
router.put("/:id/follow", async(req, res) => {
    const userId = req.params.id;
    const { currentUserId } = req.body;

    if(userId === currentUserId){
        res.status(403).json("Action Forbidden");
    }else{
        try {
            const userToBeFollowed = await UserModel.findById(userId);
            const userWantsToFollow = await UserModel.findById(currentUserId);
      
            if (!userToBeFollowed.followers.includes(currentUserId)) {

              await userToBeFollowed.updateOne({ $push: { followers: currentUserId } });
              await userWantsToFollow.updateOne({ $push: { following: userId } });

              res.status(200).json("User followed!");
            } else {
              res.status(403).json("You are already following this user");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
});


//UNFOLLOW A USER
router.put("/:id/unfollow", async(req, res) => {
    const userId = req.params.id;
    const { currentUserId } = req.body;

    if(userId === currentUserId){
        res.status(403).json("Action Forbidden");
    }else{
        try {
            const userToBeUnfollowed = await UserModel.findById(userId);
            const userWantsToUnfollow = await UserModel.findById(currentUserId);
      
            if (userToBeUnfollowed.followers.includes(currentUserId)) {

              await userToBeUnfollowed.updateOne({ $pull: { followers: currentUserId } });
              await userWantsToUnfollow.updateOne({ $pull: { following: userId } });

              res.status(200).json("User followed!");
            } else {
              res.status(403).json("You are not following this user");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }    

});

export { router as userRoute };