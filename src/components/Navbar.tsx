import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./Themetoggle";

interface NavbarProps {
  isDark: boolean;
  toggle: () => void;
}

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#education", label: "education" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

const Navbar = ({ isDark, toggle }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#" className="nav-brand">
          <span className="dot" aria-hidden="true" />
          kausher.dev
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              /{link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href="https://github.com/Kausher76"
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/kausher-i-441b78119/"
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <ThemeToggle isDark={isDark} toggle={toggle} />

          <button
            className="nav-toggler"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div className={`nav-mobile container ${open ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
            /{link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;