import { PostsData } from "../assets/PostsData.js"
import PostCard from "./PostCard"

const Posts = () => {
  return (
    <div className="flex flex-col gap-[1rem]">
        {PostsData.map((post, id)=>{
            return <PostCard data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts