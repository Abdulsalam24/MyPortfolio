import "./App.scss";
import { useEffect, useState } from "react";
import Certification from "./components/certfications/Certification";
import Contribution from "./components/Contribution";
import Header from "./components/Header";
import Layout from "./components/Layout";
import PreFooter from "./components/PreFooter";
import Project from "./components/Project/Project";
import Loader from "./components/Loader";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const [isLoading, setisLoading] = useState(true);

  setTimeout(() => {
    setisLoading(false);
  }, 4000);

  const app = document.querySelector(".App");
  
  useEffect(() => {
    if (app) {
      const scroll = new LocomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
        });
    }
  });

  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector("[data-scroll-container]"),
  //   smooth: true,
  // });

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div data-scroll-container className="App">
      <Layout className="App-inner">
        <Header />
        <Project />
        <Contribution />
        <Certification />
        <PreFooter />
      </Layout>
    </div>
  );
}

export default App;
