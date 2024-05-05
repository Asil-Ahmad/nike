import React from "react";
import { reviews } from "../constants";
import CustomersReviewCard from "../components/CustomersReviewCard";

const CustomersReviews = () => {
  return (
    <section className=" max-container">
      <h3 data-aos="fade-up" className=" font-palanquin text-4xl font-bold text-center">
        What Our <span className=" text-coral-red ">Customers</span> Says?
      </h3>
      <p  data-aos="fade-up" className="max-w-lg m-auto mt-4  info-text text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
        beatae porro aut aspernatur veritatis reprehenderit, voluptatem cumque
      </p>

      <div className="flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <CustomersReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomersReviews;
