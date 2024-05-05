import React from "react";
import Button from "../components/Button";


const Subscribe = () => {
  return (
    <section id="contact-us" className=" max-container flex flex-col items-center ">
      <h3 className=" text-white text-center font-palanquin text-4xl font-bold">
        Sign Up for <span className=" text-coral-red ">Updates </span> &
        Newsletter
      </h3>
      <div className="mt-12">
        <input
          type="text"
          className=" border-2 placeholder: p-4 px-[50px] rounded-full
           placeholder:text-center  placeholder:text-lg text-xl  
          "
          placeholder="Enter your email"
        />
        <div className="mt-8 flex items-center justify-center">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
