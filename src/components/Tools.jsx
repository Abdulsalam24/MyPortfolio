import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";

const Tools = () => {
  return (
    <div className="flex flex-col items-center" id="project">
      <p>Tools :</p>
      <div className="tools my-5 max-w-lg mx-auto flex flex-wrap gap-10 gap-y-3 justify-center items-center text-xl md:gap-14">
        <div className="flex text-lg flex-col items-center">
          <FaReact />
          <span>React.js</span>
        </div>
        <div className="flex flex-col items-center">
          <SiNextdotjs />
          <span>Next.js</span>
        </div>
        <div className="flex flex-col items-center">
          <SiJavascript />
          <span>Javascript</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTypescript />
          <span>Typescript</span>
        </div>
        <div className="flex flex-col items-center">
          <SiCss3 />
          <span>Css3</span>
        </div>
        <div className="flex flex-col items-center">
          <SiSass />
          <span>Sass</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss />
          <span>Tailwindcss</span>
        </div>
        <div className="flex flex-col items-center">
          <SiStyledcomponents />
          <span>Styled components</span>
        </div>
        <div className="flex flex-col items-center">
          <SiHtml5 />
          <span>Html5</span>
        </div>
      </div>
    </div>
  );
};

export default Tools;
