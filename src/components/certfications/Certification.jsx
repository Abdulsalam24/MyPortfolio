import { certificateData } from ".";
import gsap from "gsap";
import { useRef } from "react";
import { useIntersection } from "react-use";
import CertificateItem from "./CertificateItem";

const Certification = () => {
  const sectionRef = useRef(null);
  // const sectionRef = document.querySelector("")

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
      stagger: {
        amount: 2,
      },
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
    <section
      data-scroll-section
      className="text-base max-w-md my-10 mb-[100px]"
      ref={sectionRef}
    >
      <h2 className=" mb-5">
        Certificate
      </h2>

      <div className="flex flex-col border border-x-0 border-y-[#414141]">
        {certificateData.map((certificate, i) => (
          <CertificateItem
            key={i}
            certificate={certificate}
            certificateLength={certificateData.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Certification;
