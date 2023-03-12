import { useEffect, useRef, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import gsap from "gsap";
import { useIntersection } from "react-use";

const ProjectItem = ({ project, projectLength }) => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  const fadeIn = (element) => {
    gsap.to(element, {
      duration: 1,
      opacity: 1,
      y: -60,
      ease: "power2",
      // stagger: {
      //   amount: 0.3,
      // },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: "power2",
    });
  };

  intersection && intersection.intersectionRatio < 0.2
    ? fadeOut(sectionRef.current)
    : fadeIn(sectionRef.current);

  return (
    <div className="project overflow-x-scroll md:break-normal">
      <div className="flex flex-col gap-5 border border-t-5-[#777] border-b-0 border-l-0 border-r-0 py-5 tracking-tighter">

        <div className="flex justify-between capitalize">
          {project.id === 1 ? (
            <span>
              Featured <br /> Project ({projectLength})
            </span>
          ) : (
            <span className="invisible">.</span>
          )}
          <span className="text-right">{project.tools}</span>
        </div>

        <div ref={sectionRef} className="secound">
          <div className="inner relative top-[60px]">
            <h3
              className="text-[70px] leading-[1.2em] break-words tracking-[-0.05em] md:text-[90px] md:break-normal
              whitespace-nowrap
              "
              id="projectName"
            >
              <a href={project.link} className="pointer-events-none md:pointer-events-auto" target="_blank" rel="noreferrer">
                {project.title} - {project.description}
              </a>
            </h3>



            <div className="text-right mt-5">
              <a href={project.link} className="text-right">
                <button className="py-2 px-3 border border-[#777777] rounded-[44px] uppercase md:hidden">
                  <span className="text-base text-[#aaa]">visit site</span>{" "}
                  <BsArrowUpRight className="inline" />
                </button>
              </a>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
};

export default ProjectItem;
