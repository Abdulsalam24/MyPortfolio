import Footer from "./Footer";
import Nav from "./nav/Nav";

const Layout = ({ children }) => {
  // max-w-[1200px]
  return (
    <div className="w-[95%] mx-auto max-w-[1100px]">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
