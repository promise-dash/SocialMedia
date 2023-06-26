import { AiOutlineHeart, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

const PostCard = ({ data, id }) => {
  return (
    <div key={id} className="flex flex-col p-[1rem] border-[1px] border-neutral-900 rounded-lg gap-[1rem]">
        <img src={data.img} alt="" className="w-full max-h-[20rem] object-cover rounded-lg"/>

        <div className="flex items-start gap-[1.5rem]">
            {data.liked ? <AiFillHeart style={{color: 'red'}} className="text-[20px] cursor-pointer"/> :<AiOutlineHeart className="text-[20px] cursor-pointer"/>}
            <BiCommentDetail className="text-[20px] cursor-pointer"/>
            <AiOutlineShareAlt className="text-[20px] cursor-pointer"/>
        </div>

        <span>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default PostCard;