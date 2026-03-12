import About from "./components/about";

import EducationCertifications from "./components/education";
import Experience from "./components/experience";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import TechStack from "./components/techStack";

function App() {
  return (
    <>
    <div className="relative">
      <button className="w-20 h-20 fixed p-4 cursor-pointer border-current rounded-full right-15 bottom-15 shadow-2xl">
        <img src="send.png" alt="" className="w-10 h-10 " />
      </button>
      <Navbar />
      <About />
      <Projects />
      {/* <TechStack /> */}
      <Experience />
      <EducationCertifications />
      
      </div>
    </>
  );
}

export default App;
