import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

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
        <h1 className="text-[30vw] md:text-[25vw] tracking-tighter capitalize break-words leading-[0.85em] mt-20 md:mt-2">
          <div className="parentline flex flex-wrap items-center gap-0 justify-between ">
            <p id="header-text" className="front">
              front
            </p>
            <p
              id="header-text"
              className="dash md:mr-10 p-0 tracking-[-0.20em] front"
            >
              ——
            </p>
            <p id="header-text" className="end">
              end
            </p>
          </div>

          <div className="parentline flex flex-col gap-10 md:items-center md:justify-between md:gap-5">
            <parent
              id="header-text"
              className="dev tracking-tighter capitalize break-words text-[26vw] sm:text-[20vw]"
            >
              developer
            </parent>

            <div
              className="text-base text-left tracking-normal pl-10 max-w-[400px] ml-auto md:ml-0 md:pl-0 md:max-w-[550px] md:text-center"
              id="header-text"
            >
              <p className="about text-[#aaa] font-medium text-sm md:leading-[1.5em] md:text-lg lg:text-lg">
                <span className="text-[#777] mr-2 uppercase">About </span>Hi,
                I'm Abdulsalam Mohammed, a front-end developer skilled in
                writing clean and reusable code using the latest tools. <br />{" "}
                My career goal is to develop processes and software tools that
                can improve service delivery and product quality.
                <br />
                <br />
                Tools : Html, Css | Scss | Tailwind | Styled component,
                Javascript, React.js, Next.js, Typescript.
              </p>
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
