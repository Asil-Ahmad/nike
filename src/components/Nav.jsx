import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav
        data-aos="fade-down"
        className="flex justify-between items-center max-container"
      >
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={130}
            height={29}
            className="hover:opacity-50 text-zoom"
          />
        </a>
        <ul className=" flex flex-1 justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label} className="text-zoom ">
              <a
                href={item.href}
                className="font-montserrat leading-normal hover:font-semibold hover:text-white
                 hover:bg-coral-red p-2 px-5 rounded-full text-[20px]  text-coral-red font-[400]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block relative">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={() => setOpen(true)}
            className="invert"
          />
          {open && (
            <ul className=" bg-[#e4d7d7] rounded-md p-4 w-[11rem]  absolute -right-[1rem] top-10">
              {navLinks.map((item) => (
                <li key={item.label} className="">
                  <a
                    href={item.href}
                    className="font-montserrat p- leading-normal hover:font-semibold hover:text-white
                    hover:bg-coral-red  rounded-full text-[20px]  text-black font-[400]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
