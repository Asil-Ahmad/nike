import React from "react";
import { star } from "../assets/icons";

const CustomersReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center flex-wrap justify-center">
      
        <img
          src={imgURL}
          alt="review"
          width={120}
          height={120}
          className="rounded-full object-cover"
          data-aos="zoom-in"
        />
     
      <div className="flex justify-center flex-col items-center">
        <h4 className="info-text w-1/2 text-center max-lg:text-sm mt-5">{feedback}</h4>
        <div className="flex gap-3 mt-6">
          <img src={star} alt="star" />
          <p>({rating})</p>
        </div>
        <h3 className="text-xl font-bold font-montserrat mt-6">{customerName}</h3>
      </div>
    </div>
  );
};

export default CustomersReviewCard;
