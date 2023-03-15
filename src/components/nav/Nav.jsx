import { gsap, Power3 } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";
import Button from "../Button";
import cv from "./Abdulsalam resume.pdf";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  let logo = useRef(null);
  let ava = useRef(null);

  useEffect(() => {
    tl.to([logo.current, ava.current], 2, {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      ease: ease,
    });
  }, []);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav data-scroll-section>
      <div className="nav py-3 font-medium w-full flex flex-col gap-3 md:flex-row md:justify-between md:text-xl md:py-5">
        <div className="text-[#aaa] flex justify-between items-center">
          <span ref={logo} className="translate-x-0 translate-y-[-200px]">
            ABDULSALAM <br /> MOHAMMED
          </span>
          <div className="menu md:hidden" onClick={handleMenu}>
            <AiOutlineMenu className="w-[25px] h-[25px]" />
          </div>
        </div>

        <div
          className={`${
            menu ? "flex" : "hidden"
          } flex-col gap-3 md:flex-row items-end md:flex md:items-center`}
          ref={ava}
        >
          <div onClick={handleMenu}>
            <a href={cv} download>
              <Button text="resume" />
            </a>
          </div>

          <div onClick={handleMenu}>
            <a href="#contact">
              <Button text="contact" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
