import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between p-24">
      <div className="flex flex-col justify-center items-start ">
        <h1 className="text-3xl lg:text-5xl">
          The Ultimate <span className="block text-4xl lg:text-7xl font-bold">Chat App</span>
        </h1>
        <p className="tracking-tighter px-3 text-gray-500">Chat with your loved one</p>
      </div>
      <div className="overflow-hidden">
        <img
          src="https://www.callbell.eu/wp-content/uploads/2023/10/Slice-7-10.png"
          alt="Image for Chat App"
          className="border rounded-3xl transition-scale duration-500 hover:scale-110 "
        />
      </div>
    </div>
  );
};

export default HeroSection;
