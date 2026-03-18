import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./Themetoggle";

interface NavbarProps {
  isDark: boolean;
  toggle: () => void;
}

const Navbar = ({ isDark, toggle }: NavbarProps) => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">kausher.dev</a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
          <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
          <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>

        <div className="navbar-icons d-flex align-items-center gap-3">
          <a href="https://github.com/Kausher76" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/kausher-i-441b78119/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <ThemeToggle isDark={isDark} toggle={toggle} />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
