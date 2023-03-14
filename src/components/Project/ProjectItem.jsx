import { useEffect, useRef, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { useIntersection } from "react-use";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, {
      duration: 1,
      opacity: 0,
      y: 0,
      ease: "power2",
    });
  };

  useEffect(() => {
      intersection && intersection.intersectionRatio < 0.2
        ? fadeOut(sectionRef.current)
        : fadeIn(sectionRef.current);
  },[intersection])


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

        <div ref={sectionRef}>
          <a
            href={project.link}
            className="pointer-events-none md:pointer-events-auto"
            target="_blank"
            rel="noreferrer"
          >
            <div className="inner w-full relative top-[60px]">
              <h3
                className="text-[9.5vw] leading-[1.2em] break-words tracking-[-0.05em] md:break-normal md:whitespace-nowrap textwrapper"
                id="projectName"
              >

                {project.title} - {project.description}
              
              </h3>
              <div className="text-right mt-5">
                <a href={project.link} className="text-right pointer-events-auto"    target="_blank"
            rel="noreferrer">
                  
                  <button className="py-2 px-3 border border-[#777777] rounded-[44px] uppercase md:hidden">
                    <span className="text-base ">visit site</span>{" "}
                    <BsArrowUpRight className="inline" />
                  </button>

                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
