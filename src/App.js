import "./App.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Showcase from "./components/Showcase";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app container background">
      <Navbar />
      <Sidebar />
      <Showcase />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
