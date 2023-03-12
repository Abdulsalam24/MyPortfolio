import gsap from "gsap";
import { useRef } from "react";
import { useIntersection } from "react-use";

const Contribution = () => {
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
    <section data-scroll-section className="max-w-md mx-auto md:text-center">
      <div ref={sectionRef} className="pt-24 pb-16 relative top-[60px]">
        <h4 className="text-[12px]">COMMUNITY CONTRIBUTIONS</h4>

        <p className="text-3xl text-[#aaa] md:mt-5">
          I participated in a hackaton competition for solving problems in government.
          I and the team worked and still working on tracking corespondece app for tracking school record. <br /> I also freelanced with a team to build product selling website.
        </p>
      </div>
    </section>
  );
}; 

export default Contribution;
