import React from "react";
import { products } from "../constants";
import { star } from "../assets/icons";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5 ">
        <h2 data-aos="fade-up" className="text-white font-palanquin text-4xl font-bold">
          Our <span className=" text-coral-red ">Popular</span> Products
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="lg:max-w-lg mt-2 font-montserrat text-slate-gray "
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          beatae porro aut aspernatur veritatis reprehenderit, voluptatem cumque
        </p>
      </div>
      {/* For  shoe images  */}
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 grid-cols-1 gap-14 mx-7 "
      >
        {/* Two Methods to map each product First below is mine */}

        {/* <ul className="flex items-center flex-wrap justify-center gap-10">
          {products.map((product) => (
            <div key={product.name}>
              <img
                src={product.imgURL}
                alt=""
                width={190}
                height={120}
                className="object-contain"
              />

              <div className="mt-7">
                <div className="flex gap-2">
                  <img
                    src={star}
                    alt="star"
                    className="mb-4"
                    width={20}
                    height={20}
                  />
                  <p>4.5</p>
                </div>
                <h1 className="font-bold font-montserrat">{product.name}</h1>
                <span className=" font-semibold text-coral-red inline-block mt-3">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </ul> */}
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
          /*we using rest operator so we can easily get
          [{imgURL, name, price }] */
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
