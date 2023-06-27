import React from "react";
import { FaInstalod } from 'react-icons/fa'

const Logo = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <div className='flex gap-2'>
        <FaInstalod style={{color:'#1d9bf0', fontSize: '3rem'}}/>
        <h2 className='text-5xl font-bold'>SocialMedia</h2>
      </div>
      <small className='font-semibold text-zinc-400'>Discover, Connect and Share</small>
    </div>
  )
}

export default Logo