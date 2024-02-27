import React from "react";
import InputBox from "./mini-components/InputBox";
import FormLabel from "./mini-components/FormLabel";
import Button from "./mini-components/Button";
import Heading from "./mini-components/Heading";

const RegisterComp = () => {
  const registerUser = (event) => {
    event.preventDefault();
  };
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-10">
      <Heading>Registration Form - Chat App</Heading>
      <form onSubmit={registerUser} className="">
        <div>
          <FormLabel htmlFor="name">Name: </FormLabel>
          <InputBox type="text" name="name" placeholder="Enter your name" required/>
        </div>
        <div>
          <FormLabel htmlFor="username">Useraname: </FormLabel>
        <InputBox type="text" name="username" placeholder="Enter your username" required/>
        </div>
        <div>
        <FormLabel htmlFor="password">Password: </FormLabel>
        <InputBox type="password" name="password" placeholder="Enter your password" required/>
        </div>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default RegisterComp;
