const PreFooter = () => {
  return (
    <section data-scroll-section>
      <div className="max-w-md mx-auto text-center border-0 mb-20">
        <p>
        If you have any inquiries, suggestions, or collaboration opportunities, please don't hesitate to contact me.
        </p>
      </div>

      <div className="lineScroll w-full max-w-full overflow-hidden text-center ">
        <div className="marquee border border-y-1-[#777] py-5 border-x-0 whitespace-nowrap overflow-hidden inline-block">
          <h3 className="text-[80px] inline-block inner-footer">
            My email is always open, and I'm always on the lookout for new
            opportunities. Please contact me if you have any questions or would
            like to hire me
          </h3>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
