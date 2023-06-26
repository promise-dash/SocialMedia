import { Link } from 'react-router-dom'
import React from 'react'

const AuthForm = ({ loginPage }) => {
  return (
    <form className="flex flex-col justify-center items-center gap-3 p-[2rem] bg-neutral-900 rounded-xl bg-opacity-[0.7]">
        <p className="text-3xl font-bold mb-[2.5rem]">{loginPage ? "Log in" : "Sign Up"}</p>
        {!loginPage && 
        <div className="flex items-center gap-3">
            <input type="text" placeholder="First Name" 
            className="w-full outline-none p-[15px] flex-1 border-[1px] rounded-lg bg-transparent border-neutral-700"/>
            <input type="text" placeholder="Last Name" 
            className="w-full outline-none p-[15px] flex-1 border-[1px] rounded-lg bg-transparent border-neutral-700"/>
        </div>
        }
        <input type="email" placeholder="Email" 
        className="w-full outline-none rounded-lg p-[15px] flex-1 border-[1px] bg-transparent border-neutral-700"/>
        <input type="password" placeholder="Password" 
        className="w-full outline-none rounded-lg p-[15px] flex-1 border-[1px] bg-transparent border-neutral-700"/>
        <button type="submit" className="mt-3 w-[6.2rem] h-[2.2rem] rounded-lg self-end bg-[#1d9bf0] hover:bg-[#0090f0] font-semibold">{loginPage ? "Log in" : "Sign Up"}</button>
        <p className="text-[14px] font-light text-neutral-400">{loginPage ? "Don't have an account" : "Already have an account?"} <Link to={`/${loginPage ? "signup" : "login"}`} className="text-[#1d9bf0]">{!loginPage ? "Log in" : "Sign Up"}</Link></p>
    </form>
  )
}

export default AuthForm