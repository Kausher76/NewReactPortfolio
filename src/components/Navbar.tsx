import { FaGithub, FaTwitter } from "react-icons/fa";
import ThemeToggle from "../components/Themetoggle";

interface NavbarProps {
  isDark: boolean;
  toggle: () => void;
}

const Navbar = ({ isDark, toggle }: NavbarProps) => {

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Kausher</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">Contact</a></li>
          </ul>
          <div className="navbar-icons d-flex align-items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <ThemeToggle isDark={isDark} toggle={toggle} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;