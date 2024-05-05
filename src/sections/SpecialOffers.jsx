import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffers = () => {
  return (
    <section
      className="max-container max-sm:mt-12  lg:flex-row flex justify-wrap items-center
     max-xl:flex-col-reverse gap-10  "
    >
      <div data-aos="fade-right" className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-col flex-1 ">
        <h2 data-aos="fade-left" className=" text-white font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className=" text-coral-red ">Special</span> Offers
        </h2>
        <p data-aos="fade-up" className="lg:max-w-lg mt-4 info-text break-words">
          cing elit. Quidem accusantium ipsam perferendis, aliquam aperiam quam
          minus magni distinctio non. Labore dolore rem enim quis ullam aliquam
          saepe ad accusantium minus?voluptatem cumque
        </p>
        <p data-aos="fade-up" className="lg:max-w-lg mt-6 info-text">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div data-aos="fade-zoom-in" className="mt-11 flex flex-wrap gap-4  max-sm:justify-center ">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            textColor="text-black"
            border="bg-black"
            hover="hover:bg-coral-red animate-pulse"
          />
        </div>

        {/* <Button label="Shop Now" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            textColor="text-black"
            border="bg-black"
            hover="hover:bg-coral-red animate-pulse"
          /> */}
        {/*  backgroundColor textColor border these made dynamic `` in button.jsx 
          do check 2:17:23 */}
      </div>
    </section>
  );
};

export default SpecialOffers;
