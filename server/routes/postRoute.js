import express from "express";
import PostModel from "../models/postModel.js";
import UserModel from "../models/userModel.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

//CREATE A POST
router.post("/", verifyToken, async(req, res) => {
    const currentUserId = req.userId;
    const {description, imageUrl} = req.body;
    try {
        const newPost = new PostModel({
            userId: currentUserId,
            desc: description,
            image: imageUrl,
        });
        await newPost.save();

        res.status(200).json("Post created");
    } catch (error) {
        res.status(500).json(error);
    }
});


//GET ALL USER POSTS



//GET A POST
router.get("/:id", async(req, res) => {
    const postId = req.params.id;

    try {
        const post = await PostModel.findById(postId);

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});


//UPDATE A POST
router.put("/:id", async(req, res) => {
    const postId = req.params.id;
    const currentUserId = req.userId;
    
    try {
        const post = await PostModel.findById(postId);

        if(post.userId === currentUserId){
            await post.updateOne({ $set: req.body });

            res.status(200).json("Post updated!");
        }
        else{
            res.status(403).json("Action Forbidden");
        }
    } catch (error) {
        res.status(500).json(error);
    }

});


//DELETE A POST
router.delete("/:id", async(req, res) => {
    const postId = req.params.id;
    const currentUserId = req.userId;

    try {
        const post = await PostModel.findById(postId);

        if(post.userId === currentUserId){
            await post.deleteOne();

            res.status(200).json("Post Deleted!");
        }
        else{
            res.status(403).json("Action Forbidden");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});


//LIKE or DISLIKE A POST
router.put("/:id/like", async(req, res) => {
    const postId = req.params.id;
    const { userId } = req.body;

    try {
        const post = await PostModel.findById(postId);

        if(post.likes.includes(userId)){
            await post.updateOne({ $pull: { likes: userId } });

            res.status(200).json("Post disliked");
        }else{
            await post.updateOne({ $push: { likes: userId } });

            res.status(200).json("Post liked");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});


//GET USER FEED
router.get("/:id/timeline", async (req, res) => {
    const userId = req.params.id;

    try {
        const currentUserPosts = await PostModel.find({ userId: userId });

        const currentUser = await UserModel.findById(userId);
        const following = currentUser.following;
    
        const followingPosts = await PostModel.find({ userId: { $in: following } });
    
        const timelinePosts = currentUserPosts.concat(followingPosts).sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });

        res.status(200).json(timelinePosts);
    } catch (error) {
      res.status(500).json(error);
    }
});


export { router as postRoute };