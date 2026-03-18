import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
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
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;