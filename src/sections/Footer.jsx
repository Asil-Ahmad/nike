import React from "react";
import { footerLogo, headerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className="max-container">
      <div
        className="text-white flex items-center justify-center gap-20 
      flex-wrap max-lg:flex-col flex-col "
      >
        <img src={footerLogo} alt="" className="hover:scale-105" />

        <div className=" flex flex-row gap-5 mt-5">
          {socialMedia.map((icon) => (
            <a href={icon.href} target="_blank">
              <img
                src={icon.src}
                alt={icon.alt}
                key={icon.alt}
                width={60}
                height={60}
                className={` bg-white hover:scale-110 p-3 rounded-full cursor-pointer ${icon.hov}`}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="text-white flex-wrap flex flex-row justify-evenly mt-11 gap-10">
        {footerLinks.map((item) => (
          <div key={item.title}>
            <h3 className="flex items-center justify-start text-4xl font-semibold font-montserrat max-lg:text-2xl">
              {item.title}
            </h3>
            {item.links.map((link) => (
              <ul className="mt-4">
                <li key={link.name}>
                  <a
                    href="/"
                    className=" flex items-center justify-start font-montserrat text-2xl  max-lg:text-xl"
                  >
                    {link.name}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
