import { useEffect } from "react";
import { PostsData } from "../assets/PostsData.js"
import PostCard from "./PostCard";

const Posts = () => {

  const token = localStorage.getItem('token');
  const id = "649c511c85c997774eb42e3c";

  // useEffect(() => {
  //   const getFeed = async() => {
  //     try {
  //       const response = await fetch(`http://localhost:3001/post/${id}/timeline`, {
  //         method: "GET",
  //         headers: {
  //           authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       });
  
  //       const data = await response.json();
  //       console.log(data);
  
  //     } catch (error) {
  //       console.error("Error creating todo:", error);
  //     }
  //   };

  //   getFeed();
  // },[]);

  return (
    <div className="flex flex-col gap-[1rem]">
        {PostsData.map((post, id)=>{
            return <PostCard data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts