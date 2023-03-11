import React from "react";


const Social = ({ visible }) => {
  return (
    <div
      className={`${visible} flex-wrap gap-3 max-w-[200px] mb-5 md:flex md:max-w-full`}
    >
      <a href="">
        <button className="py-1 px-3 border border-[#777777] rounded-[44px] uppercase">
          <span className="text-sm text-[#aaa]">Twitter</span>
        </button>
      </a>

      <a href="">
        <button className="py-1 px-3 border border-[#777777] rounded-[44px] uppercase">
          <span className="text-sm text-[#aaa]">LinkedIN</span>
        </button>
      </a>

      <a href="">
        <button className="py-1 px-3 border border-[#777777] rounded-[44px] uppercase">
          <span className="text-sm text-[#aaa]">Github</span>
        </button>
      </a>
    </div>
  );
};

export default Social;
