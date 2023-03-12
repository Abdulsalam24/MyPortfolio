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
        <h1 className="text-[120px] tracking-tighter capitalize break-words leading-[1.1em] md:text-[150px] lg:text-[220px]">
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
              className="text-[120px] tracking-tighter capitalize break-words md:text-[140px] lg:text-[160px]"
            >
              developer
            </span>

            <div
              className="text-base tracking-normal pl-10 max-w-[400px] ml-auto md:ml-0 md:pl-0 md:max-w-[500px]"
              id="header-text"
            >
              <p className="text-[#aaa] font-medium">
                <span className="text-[#777] mr-2 uppercase">About </span> I am a Frontend Developer with 3 years of experience creating user interfaces with clean, reusable code using React. I create a web application with the most recent tools and have prior experience working in a team. I am constantly striving to build and advance a project as quickly as possible. When I'm working on a project, I'm eager and passionate about making sure you're completely satisfied with the service I provide.
              </p>
            </div>
          </div>
        </h1>
      </div>
    </header>
  );
};

export default Header;
