import React from "react";
import FormLabel from "./reusable-components/FormLabel";
import InputBox from "./reusable-components/InputBox";
import Button from "./reusable-components/Button";

const ContactBox = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="py-5">
      <h2 className="text-3xl mx-4 border-black sm:border-b-4 sm:inline-block">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="grid place-items-center gap-2">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <FormLabel htmlFor="username">Username</FormLabel>
            <InputBox
              placeholder="Enter your username"
              type="text"
              name="username"
            />
          </div>
          <div className="flex justify-between">
            <FormLabel htmlFor="username">Email</FormLabel>
            <InputBox placeholder="Enter your email" type="text" name="email" />
          </div>
          <div className="flex justify-between">
            <FormLabel>Message</FormLabel>
            <textarea name="" id="" cols="25" rows="5" className="resize-none outline-none border border-gray-600 rounded-lg"></textarea>
          </div>
        </div>
          <Button type="submit">Send</Button>
      </form>   
    </div>
  );
};

export default ContactBox;
