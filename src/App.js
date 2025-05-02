import { useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";
import "./App.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Showcase from "./components/Showcase";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="app container background">
      {loading ? (
        <div className="loading">
          <Vortex
            visible={true}
            height="300"
            width="300"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={[
              "white",
              "rebeccapurple",
              "red",
              "white",
              "rebeccapurple",
              "red",
            ]}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Sidebar />
          <Showcase />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
