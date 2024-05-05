// import React from "react";
// import { arrowRight } from "../assets/icons";

// const Button = () => {
//   return (
//     <button
//       className=" flex justify-center items-center gap-2 px-7 py-4
//       border font-montserrat text-lg leading-none rounded-full
//       text-white bg-[#ea553b] border-none cursor-pointer "
//     >
//       Shop Now
//       <img src={arrowRight} alt="arrowRight" width={20} height={20} />
//     </button>
//   );
// };

// export default Button;

import React from "react";

const Button = ({ label, iconUrl, backgroundColor, textColor, border,hover }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4
     border font-montserrat text-lg leading-none rounded-full  
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${border} ${hover} `
          : ` text-white bg-[#ea553b] border-none cursor-pointer hover:bg-black`
      }
      `}
    >
      {label}
      {/* here we adding iconUrl && below so tht when image is there then only 
      show otherwisw 
      u see error image icon  thts why we added {iconUrl && ~~~}*/}
      {iconUrl && <img src={iconUrl} alt="arrowRight" width={20} height={20} />}
    </button>
  );
};

export default Button;
