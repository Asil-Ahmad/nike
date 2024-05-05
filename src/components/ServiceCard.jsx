import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 bg-white sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-xl px-10 py-16">
      <div className= " flex bg-coral-red rounded-full w-11 h-11 justify-center items-center">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
