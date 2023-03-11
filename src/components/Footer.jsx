import Social from "./Social";

const Footer = () => {
  return (
    <footer data-scroll-section className="break-words py-10" id="contact">
      <div className="flex flex-col gap-4 max-w-[230px] ml-auto md:max-w-full md:gap-20">
        <p className="text-2xl text-[#aaa] md:text-center">
          abdulsalammohammed586685@gmail.com
        </p>

        <Social visible="md:hidden" />

        <div className="md:w-full md:flex justify-between">
          <p className="mb-3 md:w-[25%]">Lagos,Ng</p>

          <div className="md:w-[50%] flex justify-center">
            <Social visible="hidden md:flex" />
          </div>

          <p className="md:w-[25%] text-right">
            <span className="text-base text-[#aaa]">Designed by </span>
            <u>
              <a href="https://www.fayemi.design/">Isaac Fayemi</a>
            </u>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
