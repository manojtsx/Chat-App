import React, { useState } from 'react'
import InputBox from "./mini-components/reusable-components/InputBox";
import FormLabel from "./mini-components/reusable-components/FormLabel";
import Button from "./mini-components/reusable-components/Button";
import Heading from "./mini-components/reusable-components/Heading";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import {toast} from "react-toastify";

const LoginComp = () => {
  const {loggedInUser, setLoggedInUser} = useContext(UserContext);
  const navigate=useNavigate();
  const[user, setUser]=useState({
    username: "",
    password: ""
  })
  const handleUserValue=(event)=>{
    setUser({...user,[event.target.name]:event.target.value});
  }
  const loginUser=(event)=>{
    event.preventDefault();
    try{
    const users=JSON.parse(localStorage.getItem("user")) || [];
    const existingUser=users.find((u)=>{
     return u.username===user.username && u.password===user.password;
    })
    if(existingUser){
      toast.success("Logged in Successfully");
      navigate('/homepage');
      setLoggedInUser(existingUser);
    } else{
      toast.error("Incorrect username and password");
    }
  } catch(error){
    toast.error("Error: ", error.message)
  }
    
  };
  return (
    <form onSubmit={loginUser} className="flex flex-col justify-center items-center h-screen gap-5 text-white">
      <Heading className="text-black">Login - Chat App</Heading>
     <div className="md:h-[250px] md:w-[350px] p-5 gap-5 bg-gradient-to-r from-pink-500 to-pink-700 flex flex-col justify-center rounded-md">
      <div className="flex justify-between items-center gap-5">
      <FormLabel htmlFor="username">Username: </FormLabel>
      <InputBox type="text" name="username" value={user.username} placeholder="Username" onChange={handleUserValue} required/>
      </div>
      <div className="flex justify-between items-center gap-5">
      <FormLabel htmlFor="password">Password: </FormLabel>
      <InputBox type="password" name="password" value={user.password} placeholder="Password" onChange={handleUserValue} required/>
      </div>
      <Button type="submit">Login</Button>
     </div>
    </form>
  )
}

export default LoginComp