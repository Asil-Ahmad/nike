import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section data-aos="fade-up" className="max-container flex justify-center
     flex-wrap gap-9 ">
      {/* My method below */}
      
      {/* <div className="flex gap-10 flex-row flex-wrap items-center justify-center">
        {services.map((service) => (
          <div
            key={service.label}
            className=" flex flex-col justify-center items-start box-border border-0 shadow-2xl h-[17rem] w-[17rem] p-5 gap-2 rounded-[1.75rem] "
          >
            <img
              src={service.imgURL}
              alt="Shipping"
              className="bg-coral-red rounded-full p-1"
            />
            <p className="font-palanquin font-semibold text-lg">
              {service.label}
            </p>
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
              {service.subtext}
            </p>
          </div>
        ))}
      </div> */}
      {services.map((service) => (
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  );
};

export default Services;
