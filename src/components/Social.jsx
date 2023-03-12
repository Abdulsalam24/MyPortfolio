import React from "react";

const Social = ({ visible }) => {
  return (
    <div
      className={`${visible} flex-wrap gap-3 max-w-[200px] mb-5 md:flex md:max-w-full`}
    >
      <a href="https://mobile.twitter.com/Abdoyobos">
        <button className="py-1 px-3 border border-[#777777] rounded-[44px] uppercase">
          <span className="text-sm text-[#aaa]">Twitter</span>
        </button>
      </a>

      <a href="https://www.linkedin.com/mwlite/in/abdulsalam-mohammed-46896922b">
        <button className="py-1 px-3 border border-[#777777] rounded-[44px] uppercase">
          <span className="text-sm text-[#aaa]">LinkedIN</span>
        </button>
      </a>

      <a href="https://github.com/Abdulsalam24">
        <button className="py-1 px-3 border border-[#777777] rounded-[44px] uppercase">
          <span className="text-sm text-[#aaa]">Github</span>
        </button>
      </a>
    </div>
  );
};

export default Social;
