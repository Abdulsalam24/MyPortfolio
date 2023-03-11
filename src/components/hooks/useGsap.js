import gsap from "gsap";
import SplitType from "split-type";

export default function useGsap({ gsapClassName }) {
    console.log(gsapClassName, 'gsapClassName')
    const split = new SplitType(gsapClassName, {
        types: "lines",
        lineClass: "lineChildren",
    });

    function init() {
        gsap.to(split.lines, {
            autoAlpha: 1,
            duration: 1,
            delay: 0.5,
            y: 0,
            opacity: 1,
            visibility: false,
            stagger: 0.1,
            ease: "power2",
        });
    }

    window.addEventListener("load", init());

}