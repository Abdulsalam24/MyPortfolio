import Footer from "./Footer";
import Nav from "./nav/Nav";

const Layout = ({ children }) => {
  return (
    <div className="w-[95%] mx-auto max-w-[1250px]">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
