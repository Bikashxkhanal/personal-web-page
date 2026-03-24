import { useState } from "react";
import About from "./components/about";

import EducationCertifications from "./components/education";
import Experience from "./components/experience";
import HireMe from "./components/hireme";
import { HireMeButton } from "./components/hiremeBtn";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import TechStack from "./components/techStack";

function App() {
  

  return (
    <>
    <div className="relative">
 
      <Navbar />
      <About />
      <Projects />
      {/* <TechStack /> */}
      <Experience />
      <EducationCertifications />
        <HireMe />
      
      </div>
    </>
  );
}

export default App;
