import { gsap, Power3 } from "gsap";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import Button from "../Button";
import cv from "./Abdulsalam resume.pdf";

const Nav = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  let logo = useRef(null);
  let port = useRef(null);
  let ava = useRef(null);
  let contact = useRef(null);

  useEffect(() => {
    tl.to([logo.current, port.current, ava.current, contact.current], 2, {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      ease: ease,
    });
  }, []);

  return (
    <nav data-scroll-section>
      <div className="nav flex flex-col py-2 gap-3 justify-between font-medium w-full md:flex-row md:items-center">
        <div className="flex justify-between text-[#aaa] md:w-[30%]">
          <span ref={logo} className="translate-x-0 translate-y-[-200px]">
            ABDULSALAM <br /> MOHAMMED
          </span>
          <span ref={port} className="translate-x-0 translate-y-[-200px]">
            Frontend Developer <br /> PortFolio / 2022 — 2023
          </span>
        </div>

        <div className="flex flex-col gap-4 md:flex-row items-end md:items-center">
          <div className="btn-contact" ref={ava}>
            <a
              href={cv}
              download
              className="translate-x-0 translate-y-[-200px]"
            >
              <Button text="resume" />
            </a>
          </div>

          <div className="btn-contact" ref={contact}>
            <a href="#contact" className="translate-x-0 translate-y-[-200px]">
              <Button text="contact" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
