import React from 'react'
import InputBox from "./mini-components/InputBox";
import FormLabel from "./mini-components/FormLabel";
import Button from "./mini-components/Button";
import Heading from "./mini-components/Heading";

const LoginComp = () => {
  const loginComp=(event)=>{
    event.preventDefault();
  };
  return (
    <form onSubmit={loginComp} className="flex flex-col justify-center items-center h-screen gap-5 text-white">
      <Heading className="text-black">Login - Chat App</Heading>
     <div className="h-[250px] w-[350px] gap-5 bg-gradient-to-r from-pink-500 to-pink-700 flex flex-col justify-center items-center rounded-md">
      <div className="flex items-center gap-5">
      <FormLabel htmlFor="username" className="text-white">Username: </FormLabel>
      <InputBox type="text" name="username" placeholder="Username" required/>
      </div>
      <div className="flex items-center gap-5">
      <FormLabel htmlFor="password">Password: </FormLabel>
      <InputBox type="password" name="password" className="mb" placeholder="Password" required/>
      </div>
      <div className='w-[300px] bg-black flex justify-center'>
      <Button type="submit" className="w-full" >Login</Button>
      </div>
     </div>
    </form>
  )
}

export default LoginComp