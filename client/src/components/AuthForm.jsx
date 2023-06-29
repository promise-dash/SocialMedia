import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AuthForm = ({ loginPage }) => {

  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    username: '', 
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(`http://localhost:3001/auth/${loginPage ? "login" : "register"}`, {
      method: "POST",
      headers: {
				'Content-Type': 'application/json',
			},
      body: JSON.stringify(userData)
    });

    const data = await response.json();
    if(data.message){
      setErrorMessage(data.message);
    }

    setLoading(false);
    if(data.token){
      window.localStorage.setItem('token', data.token);
      window.location.href="/";
    }
  }

  return (
    <form onSubmit={handleSubmit}
    className="flex flex-col justify-center items-center gap-3 p-[2rem] bg-neutral-900 rounded-xl bg-opacity-[0.7]">
        <p className="text-3xl font-bold mb-[2.5rem]">{loginPage ? "Log in" : "Sign Up"}</p>

        {!loginPage && 
        <div className="flex items-center gap-3">
            <input type="text" placeholder="First Name" name='firstname' value={userData.firstname} onChange={handleChange}
            className="w-full outline-none p-[15px] flex-1 border-[1px] rounded-lg bg-transparent border-neutral-700"/>
            <input type="text" placeholder="Last Name" name='lastname' value={userData.lastname} onChange={handleChange}
            className="w-full outline-none p-[15px] flex-1 border-[1px] rounded-lg bg-transparent border-neutral-700"/>
        </div>
        }
        <input type="email" placeholder="Email" name='username' value={userData.username} onChange={handleChange}
        className="w-full outline-none rounded-lg p-[15px] flex-1 border-[1px] bg-transparent border-neutral-700"/>
        <input type="password" placeholder="Password" name='password' value={userData.password} onChange={handleChange}
        className="w-full outline-none rounded-lg p-[15px] flex-1 border-[1px] bg-transparent border-neutral-700"/>
        {errorMessage && <small className="text-red-500">* {errorMessage} *</small>}
        
        <button disabled={loading} type="submit" className="mt-3 w-[6.2rem] h-[2.2rem] rounded-lg self-end bg-[#1d9bf0] hover:bg-[#0090f0] font-semibold">{loading ? "Loading..." : loginPage ? "Log in" : "Sign Up"}</button>
        <p className="text-[14px] font-light text-neutral-400">{loginPage ? "Don't have an account" : "Already have an account?"} <Link to={`/${loginPage ? "signup" : "login"}`} className="text-[#1d9bf0]">{!loginPage ? "Log in" : "Sign Up"}</Link></p>
    </form>
  )
}

export default AuthForm