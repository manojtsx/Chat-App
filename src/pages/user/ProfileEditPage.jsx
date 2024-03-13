import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Heading from "../../components/mini-components/reusable-components/Heading";
import FormLabel from "../../components/mini-components/reusable-components/FormLabel";
import InputBox from "../../components/mini-components/reusable-components/InputBox";
import Button from "../../components/mini-components/reusable-components/Button";

const ProfileEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const allUsers = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const userData = allUsers.find((user) => {
      return user.id === Number(id);
    });
    setUser({
        name: userData.name,
        username: userData.username,
        password: userData.password,
        nickname: userData.nickname,
      });
  }, []);
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    nickname: "",
  });
  const handleUserValue = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };
  const editUser = (event) => {
    event.preventDefault();
        allUsers[id] = {...allUsers[id],...user};
        localStorage.setItem("user", JSON.stringify(allUsers));
        navigate(`/profile/${id}`);
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-10">
      <Heading>Profile Edit Form - Chat App</Heading>
      <form
        onSubmit={editUser}
        className="flex flex-col gap-5 bg-gradient-to-r from-pink-500 to-pink-700 p-5 rounded-md text-white"
      >
        <div className="flex justify-between items-center">
          <FormLabel htmlFor="name">Name: </FormLabel>
          <InputBox
            type="text"
            name="name"
            value={user.name}
            placeholder="Enter your name"
            onChange={handleUserValue}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <FormLabel htmlFor="username">Username: </FormLabel>
          <InputBox
            type="text"
            name="username"
            value={user.username}
            placeholder="Enter your username"
            onChange={handleUserValue}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <FormLabel htmlFor="password">Password: </FormLabel>
          <InputBox
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your password"
            onChange={handleUserValue}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <FormLabel htmlFor="nickname">Nickname: </FormLabel>
          <InputBox
            type="nickname"
            name="nickname"
            value={user.nickname}
            placeholder="Enter your nickname"
            onChange={handleUserValue}
            required
          />
        </div>
        <Button type="submit">Edit</Button>
      </form>
    </div>
  );
};

export default ProfileEditPage;
