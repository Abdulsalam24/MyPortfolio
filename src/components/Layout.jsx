import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="w-[90%] mx-auto max-w-[1000px]">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
