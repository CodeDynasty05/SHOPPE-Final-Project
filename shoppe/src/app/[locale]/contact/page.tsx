import Input from "@/components/_common/input";
import React from "react";

const ContactPage = () => {
  return (
    <div className="w-[60%] mx-auto flex flex-col justify-evenly gap-10">
      <div>
        <h3 className="text-3xl text-center mb-8">Contact Us</h3>
        <p className="text-center w-[40%] mx-auto">
          Say Hello send us your thoughts about our products or share your ideas
          with our Team!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-32 gap-y-24">
        <div className="border-b-black-300 border-b-2">
          <Input type="text" placeholder="First Name" />
        </div>
        <div className="border-b-black-300 border-b-2">
          <Input type="text" placeholder="Last Name" />
        </div>
        <div className="border-b-black-300 border-b-2">
          <Input type="email" placeholder="Email" />
        </div>
        <div className="border-b-black-300 border-b-2">
          <Input type="text" placeholder="Subject" />
        </div>
        <div className="border-b-black-300 border-b-2 col-span-2">
          <Input type="text" placeholder="Message" />
        </div>
      </div>
      <button className="text-white bg-black p-3 w-[40%] mx-auto">SEND</button>
    </div>
  );
};

export default ContactPage;
