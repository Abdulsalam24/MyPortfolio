import Social from "./Social";

const Footer = () => {
  return (
    <footer data-scroll-section className="py-10" id="contact">

      <div className="flex flex-col items-center justify-center gap-10 ">

        <p className="text-2xl text-[#aaa] text-center md:text-center break-all">
          <a href="mailto:abdulsalammohammed586685@gmail.com"  className="break-words">
            abdulsalammohammed586685@gmail.com
          </a>
        </p>

        <Social visible="md:hidden" />

        <div className="md:w-full md:flex justify-between">
          <p className="mb-3 md:w-[25%]">Lagos,Ng</p>

          <div className="md:w-[50%] flex justify-center">
            <Social visible="hidden md:flex" />
          </div>

          <p className="md:w-[25%] text-right">
            <span className="text-base text-[#aaa]">Designed by </span>
              <a href="https://www.fayemi.design/">Isaac Fayemi</a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
