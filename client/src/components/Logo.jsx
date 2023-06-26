import React from "react"
import Logo from "../assets/images/logo.png"

const Logo = () => {
  return (
    <div className='flex gap-2 items-center justify-center cursor-pointer mb-8'>
        <img src={Logo} width={30} height={30}  alt='Logo'/>
        <p className='text-xl'>SocialMedia</p>
    </div>
  )
}

export default Logo