import Footer from "./Footer";
import Nav from "./nav/Nav";

const Layout = ({ children }) => {
  // max-w-[1200px]
  
  return (
    <div className="w-[90%] mx-auto">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
