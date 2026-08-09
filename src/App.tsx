import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useDarkMode } from "./components/Usedarkmode";
import "./App.css";

function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <>
      <Navbar isDark={isDark} toggle={toggle} />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;