import React from "react";
import { useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { MdDateRange, MdImage, MdLocationOn, MdVideoLibrary } from "react-icons/md";
import UserImage from "../assets/images/profileImg.jpg";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="flex gap-[1rem] border-[1px] border-neutral-900 rounded-lg p-[1rem]">
      <img src={UserImage} alt="" className="rounded-[50%] w-[3rem] h-[3rem]"/>
      <div className="flex flex-col w-[90%] gap-[1rem]">
        <input type="text" placeholder="What's happening..." 
            className="rounded-lg border-[1px] border-neutral-900 p-[10px] text-[17px] bg-transparent outline-none"/>
        <div className="flex justify-around">
          <div className="py-[5px] px-[10px] rounded-lg flex items-center justify-center text-[12px] hover:cursor-pointer"
          onClick={()=>imageRef.current.click()}
          >
            <MdImage className="text-[1.2rem] mr-1 text-green-300"/>
            Photo
          </div>
          <div className="py-[5px] px-[10px] rounded-lg flex items-center justify-center text-[12px] hover:cursor-pointer">
            <MdVideoLibrary className="text-[1.2rem] mr-1 text-red-300"/>
            Video
          </div>
          <div className="py-[5px] px-[10px] rounded-lg flex items-center justify-center text-[12px] hover:cursor-pointer">
            <MdLocationOn className="text-[1.2rem] mr-1 text-yellow-300"/>
            Location
          </div>
          <div className="py-[5px] px-[10px] rounded-lg flex items-center justify-center text-[12px] hover:cursor-pointer">
            <MdDateRange className="text-[1.2rem] mr-1 text-purple-300"/>
            Shedule
          </div>
          <button className="px-[20px] py-[5px] text-[1rem] rounded-lg bg-[#1d9bf0] hover:bg-[#0090f0] font-semibold">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>

      {image && (

        <div className="relative">
          <IoMdClose className="float-right cursor-pointer text-[1.2rem]" onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" className="w-full max-h-[20rem] object-cover rounded-lg"/>
        </div>

      )}


      </div>
    </div>
  );
};

export default PostShare;
