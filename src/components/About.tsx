import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import profile from "../assets/IMG_20260117_141710330.jpg";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="eyebrow">
          <span className="method get">GET</span>
          <span className="path">/about</span>
        </div>
        <h2 className="section-title">About</h2>

        <div className="about-grid">
          <img src={profile} className="about-photo" alt="Kausher Imam Alam" loading="lazy" />

          <div>
            <p className="about-text">
              I'm a Full Stack Developer with experience building scalable web applications
              using <strong>React</strong>, <strong>.NET Core</strong>, and{" "}
              <strong>SQL Server</strong>. I'm passionate about creating user-focused,
              high-performance applications that solve real-world problems.
            </p>

            <div className="tag-row">
              <span className="tag"><b>experience</b> · 1+ year</span>
              <span className="tag"><b>stack</b> · React · .NET Core · SQL Server</span>
            </div>

            <div className="about-footer">
              <a href="#contact" className="btn btn-solid">get in touch</a>
              <div className="social-row">
                <a href="https://github.com/Kausher76" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                  <FaGithub size={16} />
                </a>
                <a href="https://www.linkedin.com/in/kausher-i-441b78119/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                  <FaLinkedin size={16} />
                </a>
                <a href="https://www.instagram.com/kausher.alam22/" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;