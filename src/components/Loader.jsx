import {useEffect} from 'react'
import gsap from "gsap";
import SplitType from "split-type";

const Loader = () => {

  useEffect(() => {
  new SplitType("#myText")
    const animation = gsap.to('.char',{
      y:0,
      stagger:0.05,
      delay:0.5,
      duration:.1,
      ease:"elastic",
    })

    return () => animation.kill();
  }, [])


  return (
    <div className="loader h-screen text-center grid place-items-center text-[25px] sm:text-[50px] md:text-[80px] uppercase">
        <h1 id="myText">You are Welcome</h1>
    </div>

  )
}

export default Loader
