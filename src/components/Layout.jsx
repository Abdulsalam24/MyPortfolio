import Footer from "./Footer";
import Nav from "./nav/Nav";

const Layout = ({ children }) => {
  return (
    <div className="w-[90%] mx-auto max-w-[1200px]">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
