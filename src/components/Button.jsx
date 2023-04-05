import React from "react";


const Button = ({ text }) => {
  return (
    <button className="py-1 px-2 text-sm border border-[#777777]  rounded-[10px] hover:rounded-[44px] capitalize md:text-lg hover:md:rounded-[15px] transition-all">
      {text}
    </button>
  );
};

export default Button;
