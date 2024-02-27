import React from 'react'
import InputBox from './mini-components/InputBox';

const RegisterComp = () => {
  const registerUser = (event) =>{
    event.preventDefault();
  }
  return (
    <div>
      <h1>Registration Form - Chat App</h1>
      <form  onSubmit={registerUser}>
        <InputBox type="text" placeholder="Enter your name"/>
        <InputBox type="text" placeholder="Enter your username"/>
        <InputBox type="password" placeholder="Enter your password"/>
      </form>
    </div>
  )
}

export default RegisterComp