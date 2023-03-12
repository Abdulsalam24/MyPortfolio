import { gsap, Power3 } from "gsap";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import cv from "./Abdulsalam resume.pdf";

const Nav = () => {
  // useEffect(() => {
  //   new SplitType("#myText")
  //     const animation = gsap.to('.char',{
  //       y:0,
  //       stagger:0.05,
  //       delay:0.5,
  //       duration:.1,
  //       ease:"elastic",
  //     })

  //     return () => animation.kill();
  //   }, [])

  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  let logo = useRef(null);
  let port = useRef(null);
  let ava = useRef(null);
  let contact = useRef(null);

  useEffect(() => {
    tl.to([logo.current, port.current, ava.current, contact.current], 2, {
      opacity: 1,
      duration: 0.5,
      y: "0",
      stagger: {
        amount: 0.4,
      },
      ease: ease,
    });
  });


  return (
    <nav data-scroll-section>
      <div className="nav flex flex-col py-5 gap-3 justify-between font-medium w-full md:flex-row md:items-center">
        <div className="flex justify-between text-[#aaa] md:w-[30%]">
          <span ref={logo} className="translate-x-0 translate-y-[-200px]">
            ABDULSALAM <br /> MOHAMMED
          </span>
          <span ref={port} className="translate-x-0 translate-y-[-200px]">
            Frontend Developer <br /> PortFolio / 2022 — 2023
          </span>
        </div>

        <div className="flex flex-col gap-4 md:flex-row items-end md:items-center">
          <span ref={ava} className="translate-x-0 translate-y-[-200px]">
            <a
              href={cv}
              download
              className="translate-x-0 translate-y-[-200px]"
            >
              <button className="py-1 px-2 text-base border border-[#777777] rounded-[44px] uppercase md:text-sm">
                Resume
              </button>
            </a>
          </span>

          <div className="btn-contact" ref={contact}>
            <a href="#contact" className="translate-x-0 translate-y-[-200px]">
              <button className="py-1 px-2 text-base border border-[#777777] rounded-[44px] uppercase md:text-sm">
                contact
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
