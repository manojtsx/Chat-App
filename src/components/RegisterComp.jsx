import React, { useState } from "react";
import InputBox from "./mini-components/reusable-components/InputBox";
import FormLabel from "./mini-components/reusable-components/FormLabel";
import Button from "./mini-components/reusable-components/Button";
import Heading from "./mini-components/reusable-components/Heading";
import {useNavigate} from "react-router-dom";

const RegisterComp = () => {
  let userLength = 0;
  if(localStorage.getItem("user")){
    userLength = JSON.parse(localStorage.getItem("user")).length;
  }
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id : userLength,
    name : "",
    username : "",
    password : "",
    nickname: ""
    });

  const registerUser = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("user")) || [];
    users.push(user);
    localStorage.setItem("user",JSON.stringify(users));
    navigate('/login');
  };
  const handleUserValue = (event) =>{
    setUser({...user, [event.target.name] : event.target.value});
  }
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-10">
      <Heading>Registration Form - Chat App</Heading>
      <form onSubmit={registerUser} className="flex flex-col gap-5 bg-gradient-to-r from-pink-500 to-pink-700 p-5 rounded-md text-white">
        <div className="flex justify-between items-center">
          <FormLabel htmlFor="name">Name: </FormLabel>
          <InputBox type="text" name="name" value={user.name} placeholder="Enter your name" onChange={handleUserValue} required/>
        </div>
        <div className="flex justify-between items-center">
          <FormLabel htmlFor="username">Username: </FormLabel>
        <InputBox type="text" name="username" value={user.username} placeholder="Enter your username" onChange={handleUserValue} required/>
        </div>
        <div className="flex justify-between items-center">
        <FormLabel htmlFor="password">Password: </FormLabel>
        <InputBox type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleUserValue} required/>
        </div>
        <Button type="submit" on>Register</Button>
      </form>
    </div>
  );
};

export default RegisterComp;
