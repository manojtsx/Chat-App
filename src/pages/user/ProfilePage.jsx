import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const allUserData = JSON.parse(localStorage.getItem("user"));
  const rightUserData = allUserData.find((user) => {
    return user.id === Number(id);
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-gray-200">
        <h1 className="text-3xl">Your Profile</h1>
        <div className="self-center">
          <p>Name : {rightUserData.name}</p>
          <p>Password : {rightUserData.password}</p>
          <p>Nickname : {rightUserData.nickname? rightUserData.nickname : "No nickname"}</p>
          <button onClick={()=>navigate(`/profile/edit/${rightUserData.id}`)}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
