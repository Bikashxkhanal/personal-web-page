import About from "./components/about";
import EducationCertifications from "./components/education";
import Experience from "./components/experience";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import TechStack from "./components/techStack";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      {/* <TechStack /> */}
      <Experience />
      <EducationCertifications />
    </>
  );
}

export default App;
