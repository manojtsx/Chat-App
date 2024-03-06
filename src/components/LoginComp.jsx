import React from 'react'
import InputBox from "./mini-components/reusable-components/InputBox";
import FormLabel from "./mini-components/reusable-components/FormLabel";
import Button from "./mini-components/reusable-components/Button";
import Heading from "./mini-components/reusable-components/Heading";

const LoginComp = () => {
  const loginComp=(event)=>{
    event.preventDefault();
  };
  return (
    <form onSubmit={loginComp} className="flex flex-col justify-center items-center h-screen gap-5 text-white">
      <Heading className="text-black">Login - Chat App</Heading>
     <div className="md:h-[250px] md:w-[350px] p-5 gap-5 bg-gradient-to-r from-pink-500 to-pink-700 flex flex-col justify-center rounded-md">
      <div className="flex justify-between items-center gap-5">
      <FormLabel htmlFor="username">Username: </FormLabel>
      <InputBox type="text" name="username" placeholder="Username" required/>
      </div>
      <div className="flex justify-between items-center gap-5">
      <FormLabel htmlFor="password">Password: </FormLabel>
      <InputBox type="password" name="password" placeholder="Password" required/>
      </div>
      <Button type="submit">Login</Button>
     </div>
    </form>
  )
}

export default LoginComp