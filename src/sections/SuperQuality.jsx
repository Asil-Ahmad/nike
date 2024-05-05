import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  //bg-[#cd081d]
  return (
    <section
      id="about-us"
      className="flex  justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col flex-1 ">
        <h2
          data-aos="fade-right"
          className="text-white font-palanquin text-4xl font-bold lg:max-w-lg"
        >
          We Provide You <span className=" text-coral-red ">Super Quality</span>{" "}
          Shoes
        </h2>
        <div data-aos="fade-up">
          <p className="lg:max-w-lg mt-4 info-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            beatae porro aut aspernatur veritatis reprehenderit, voluptatem
            cumque
          </p>
          <p className="lg:max-w-lg mt-4 info-text">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="mt-12 flex max-sm:justify-center">
          <Button label="View details" />
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="flex flex-1 justify-center items-center"
      >
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain transition rounded-2xl  delay-100  hover:scale-105 duration-500 ease-in-out "
        />
      </div>
    </section>
  );
};

export default SuperQuality;
