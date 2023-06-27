import React from 'react'
import AuthForm from '../components/AuthForm'
import Logo from '../components/Logo'

const Login = () => {
  
  return (
    <section className='max-w-[80%] grid grid-cols-2 gap-5 m-auto mt-[5rem]'>
      <Logo />
      <AuthForm loginPage={true}/>
    </section>
  )
}

export default Login