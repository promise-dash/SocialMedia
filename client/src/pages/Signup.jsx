import React from "react";
import AuthForm from "../components/AuthForm";
import Logo from "../components/Logo";

const Register = () => {

  return (
    <section className='max-w-[80%] grid grid-cols-2 gap-5 m-auto mt-[5rem]'>
      <Logo />
      <AuthForm />
    </section>
  )
}

export default Register;