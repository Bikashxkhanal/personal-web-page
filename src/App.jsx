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
  const [active , setActive ] = useState(false);
  const showHireMePage = () => {
    console.log("Hire me");
    setActive((prev) => !prev);
     
  }

  const handleFormClosure = () => {
    setActive(false);
  }

  return (
    <>
    <div className="relative">
     <HireMe active={active} hadleFormClousure={handleFormClosure} />
     <HireMeButton onClick={showHireMePage} />
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
