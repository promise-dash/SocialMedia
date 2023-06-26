import React from 'react'
import AuthForm from '../components/AuthForm'
import { FaInstalod } from 'react-icons/fa'

const Login = () => {
  return (
    <section className='max-w-[80%] grid grid-cols-2 gap-5 m-auto mt-[5rem]'>
      <div className='flex items-center justify-center gap-2'>
        <FaInstalod style={{color:'#1d9bf0', fontSize: '3rem'}}/>
        <h2 className='text-5xl font-bold'>SocialMedia</h2>
      </div>
     <AuthForm loginPage={true}/>
    </section>
  )
}

export default Login