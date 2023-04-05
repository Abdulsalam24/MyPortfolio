import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiTypescript, SiCss3, SiSass, SiStyledcomponents, SiTailwindcss, SiHtml5 } from "react-icons/si";

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
        x: -7,
        opacity: 1,
        visibility: false,
        stagger: 0.1,
        ease: "power2",
      });
    }

    window.addEventListener("load", init());
  }, []);

  return (
    <header data-scroll-section className="mb-40 md:mb-0">
      <div>
        <h1 className="text-[26vw] md:text-[25vw] tracking-tighter capitalize break-words leading-[0.85em] mt-20 md:mt-2">
          <div className="parentline flex flex-wrap items-center gap-0 justify-between ">
            <p id="header-text" className="front">
              front
            </p>
            <p
              id="header-text"
              className="dash mr-10 md:mr-10 p-0 tracking-[-0.50em] md:tracking-[-0.20em] front"
            >
              ——
            </p>
            <p id="header-text" className="end">
              end
            </p>
          </div>

          <div className="parentline flex flex-col gap-10 md:items-center md:justify-between md:gap-5">
            <div
              id="header-text"
              className="dev tracking-tighter capitalize break-words text-[26vw] sm:text-[20vw]"
            >
              engineer
            </div>

            <div
              className="about text-base text-left tracking-normal pl-10 max-w-[400px] ml-auto md:ml-0 md:pl-0 md:max-w-[550px] md:text-center"
              id="header-text"
            >
              <p className="text-[#aaa] font-medium text-sm md:leading-[1.5em] md:text-lg lg:text-lg normal-case">
                <span className="text-[#777] mr-2 uppercase">About </span>Hi,
                I'm Abdulsalam Mohammed, a front-end engineer experienced in
                writing clean and reusable code with the latest tools. <br /> My
                career goal is to develop processes and software tools that can
                improve service delivery and product quality.
                <br />
                <br />
              </p>
              Tools :
              <div className="tools my-5 max-w-sm mx-auto flex flex-wrap gap-10 gap-y-3 justify-center items-center text-xl">
                <div className="flex text-lg flex-col items-center">
                  <FaReact />
                  <span>React.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiNextdotjs />
                  <span>Next.js</span>
                  
                </div>
                <div className="flex flex-col items-center">
                  <SiJavascript />
                  <span>Javascript</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiTypescript />
                  <span>Typescript</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiCss3 />
                  <span>Css3</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiSass />
                  <span>Sass</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiTailwindcss />
                  <span>Tailwindcss</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiStyledcomponents />
                  <span>Styled components</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiHtml5 />
                  <span>Html5</span>
                </div>

                {/* <FaReact className="w-[150px]" />, Next.js, Javascript,
                Typescript, Css | Scss | Tailwind | Styled component, Html. */}
              </div>
            </div>
          </div>
        </h1>
      </div>
      <div className="scrollDown my-10">
        <a href="#project" className="flex items-center flex-col">
          <span>Scroll down</span>
          <MdKeyboardDoubleArrowDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
