import { gsap, Power3 } from "gsap";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import Button from "../Button";
import cv from "./Abdulsalam resume.pdf";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {

  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  let logo = useRef(null);
  let res = useRef(null);
  let contact = useRef(null);


  useEffect(() => {
    tl.to([logo.current, res.current , contact.current], 2, {
      opacity: 1,
      y: 0,
      stagger: 0.4,
      ease: ease,
    });
  }, []);



  return (
    <nav data-scroll-section>
      <div className="nav py-3 font-medium w-full flex flex-col gap-3 md:flex-row md:justify-between md:text-xl md:pt-3 md:pb-5">
        <div className="text-[#aaa] w-full flex justify-between items-center">
          <span ref={logo} className="translate-x-0 translate-y-[-200px]">
            ABDULSALAM <br /> MOHAMMED
          </span>

          <div
            className="btn flex gap-3"
          >
            <div>
              <a href={cv} ref={res} download className="translate-x-0 translate-y-[-200px]">
                <Button text="resume" />
              </a>
            </div>

            <div>
              <a href="#contact" ref={contact} className="translate-x-0 translate-y-[-200px]">
                <Button text="contact"/>
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
