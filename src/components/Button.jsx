import React from "react";


const Button = ({ text }) => {
  return (
    <button className="py-1 px-2 text-sm border border-[#777777] rounded-[44px] capitalize md:text-sm md:rounded-[20px]">
      {text}
    </button>
  );
};

export default Button;
