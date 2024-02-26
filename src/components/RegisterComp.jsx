import React from 'react'
import InputText from './mini-components/InputText';

const RegisterComp = () => {
  const registerUser = (event) =>{
    event.preventDefault();
  }
  return (
    <div>
      <h1>Registration Form - Chat App</h1>
      <form  onSubmit={registerUser}>
        <InputText type="text" />
      </form>
    </div>
  )
}

export default RegisterComp