import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const Header = () => {

  useEffect(() => {
    const split = new SplitType("#header-text", {
      types: "lines",
      lineClass: "lineChildren",
    });

    function init() {
      gsap.to(split.lines, {
        autoAlpha: 1,
        duration: 1,
        delay: 0.5,
        y: 0,
        opacity: 1,
        visibility: false,
        stagger: 0.1,
        ease: "power2",
      });
    }

    window.addEventListener("load", init());
  }, []);
  

  return (
    <header data-scroll-section>
      <div>
        <h1 className="text-[120px] tracking-tighter capitalize break-words leading-[1.1em] md:text-[150px] lg:text-[160px]">
          <div className="parentline flex flex-wrap items-center justify-between">
            <p id="header-text">front</p>
            <p id="header-text" className="m-0 p-0 tracking-[-0.20em] mr-1">
              ——
            </p>
            <p id="header-text">end</p>
          </div>

          <div className="parentline flex flex-col gap-10 lg:flex-row md:items-center md:justify-between">
            <span
              id="header-text"
              className="text-[120px] tracking-tighter capitalize break-words md:text-[140px]"
            >
              developer
            </span>

            <div
              className="text-base tracking-normal pl-10 max-w-[290px] ml-auto md:ml-0 md:pl-0"
              id="header-text"
            >
              <p className="text-[#aaa] font-medium">
                <span className="text-[#777] mr-2 uppercase">About </span> I am
                a developer based in Lagos, Nigeria focused on creating
                interactive digital experiences on the web, working with brands
                and industry leaders such as
              </p>
            </div>
          </div>
        </h1>
      </div>
    </header>
  );
};

export default Header;
