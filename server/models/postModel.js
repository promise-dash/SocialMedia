import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: { 
        type: String,
        required: true 
    },
    desc: {
        type: String, 
        required : true
    },
    image: String,
    likes: [],
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Posts", PostSchema);

export default PostModel;
