import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

import React, { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start
       w-full max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1
          data-aos="fade-up"
          className="mt-10 z-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
        >
          <span className="xl:bg-white xl:text-black text-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival{" "}
          </span>{" "}
          <br />
          <span className=" text-coral-red inline-block mt-3 ">Nike</span>{" "}
          <span className="text-white">Shoes</span>
        </h1>
        <p className="text-lg leading-8 mt-6 mb-10 font-montserrat text-slate-gray sm:max-w-sm ">
          Discover stylish New arrivals,quality comfort,and innovation for your
          active life.
        </p>
        <div data-aos="fade-right">
          <Button label="Shop Now" iconUrl={arrowRight} />
        </div>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item) => (
            <div key={item.label}>
              <p
                className="lg:text-[50px] lg:font-[400] md:text-[50px] md:font-[400]  font-palanquin ss:text-[30px]
              animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]"
              >
                {item.value}
              </p>
              <p className="text-[30px] ss:text-[20px] font-montserrat">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image section */}

      <div className="relative flex flex-1 flex-wrap justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img
          src={bigShoeImage}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10 hover:scale-125 duration-500 ease-in-out "
        />

        {/* Now for Shoe Cards */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
