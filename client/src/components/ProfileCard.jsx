import { Link } from 'react-router-dom';
import React from 'react'
import CoverImage from "../assets/images/cover.jpg"
import ProfileImage from "../assets/images/profileImg.jpg"

const ProfileCard = () => {

  const ProfilePage = false ;

  return (
    <div className='flex flex-col relative gap-[1rem] rounded-lg border-[1px] border-neutral-900 overflow-x-clip'>
      <div className='relative flex flex-col items-center justify-center'>
        <img src={CoverImage} alt="" className='w-full'/>
        <img src={ProfileImage} alt="" className='w-[6rem] rounded-[50%] absolute bottom-[-3rem] shadow-lg'/>
      </div>

      <div className='flex flex-col items-center mt-[3rem] gap-[10px]'>
        <span className='font-bold'>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className='flex flex-col items-center justify-center gap-[0.75rem]'>
        <hr className='w-[85%] bottom-[1px] border-neutral-700'/>
        <div className='flex gap-[1rem] w-[80%] justify-around items-center my-3 text-sm'>
          <div className='flex flex-col gap-[0.4rem] items-center justify-center font-semibold'>
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className='h-[150%] border-l-[1px] border-neutral-700'></div>
          <div className='flex flex-col gap-[0.4rem] items-center justify-center font-semibold'>
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className='h-[150%] border-l-[1px] border-neutral-700'></div>
              <div className='flex flex-col gap-[0.4rem] items-center justify-center font-semibold'>
                <span>3</span>
                <span>Posts</span>
              </div>
              <br />
            </>
          )}
        </div>
        {ProfilePage ? <hr className='mb-1'/> : <hr className='w-[85%] bottom-[1px] border-neutral-700'/>}
      </div>
      {ProfilePage ? "" : <Link to="/profile" className='font-bold self-center mb-[1rem] cursor-pointer'>My Profile</Link>}
    </div>
  )
}

export default ProfileCard