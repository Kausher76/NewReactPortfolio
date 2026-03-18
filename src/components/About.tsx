import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import profile from "../assets/IMG_20251223_170929465~2.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        <div className="section-header">
          <h2>About</h2>
          <span className="divider-line" />
        </div>

        <div className="row align-items-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <img src={profile} className="about-img" alt="Kausher Imam Alam" />
          </div>

          <div className="col-md-8 ps-md-5">
            <p>
              I'm a Full Stack Developer with experience building scalable web applications
              using <strong>React</strong>, <strong>.NET Core</strong>, and <strong>SQL Server</strong>.
              I'm passionate about creating user-focused, high-performance applications that
              solve real-world problems.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-3">
              <span className="about-badge">⭐ 1+ Year of Experience</span>
              <span className="about-badge">⚙️ React · .NET · SQL Server</span>
            </div>

            <div className="d-flex align-items-center gap-3 mt-4 flex-wrap">
              <a href="#contact" className="btn-solid">Get in Touch</a>
              <div className="about-social">
                <a href="https://github.com/Kausher76" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/kausher-i-441b78119/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/kausher.alam22/" target="_blank" rel="noreferrer"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;