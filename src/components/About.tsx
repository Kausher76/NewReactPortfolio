import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import profile from "../assets/IMG_20260117_141710330.jpg";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="eyebrow">About</div>
        <h2 className="section-title">A bit about how I work</h2>

        <div className="about-grid">
          <div className="glass about-card">
            <p className="about-text">
              I'm a Full Stack Developer with experience building scalable web
              applications using <strong>React</strong>, <strong>.NET Core</strong>, and{" "}
              <strong>SQL Server</strong>. I'm passionate about creating user-focused,
              high-performance applications that solve real-world problems.
            </p>

            <div className="about-tags">
              <span className="pill"><b>2+ years</b> experience</span>
              <span className="pill">MCA, <b>Sardar Patel Institute</b></span>
              <span className="pill">Based in <b>Mumbai, India</b></span>
            </div>

            <div className="about-footer">
              <a href="#contact" className="btn btn-gradient">Get in touch</a>
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

          <div className="stat-grid">
            <div className="glass" style={{ gridColumn: "1 / -1", padding: 0, overflow: "hidden" }}>
              <img
                src={profile}
                alt="Kausher Imam Alam"
                style={{ width: "100%", height: 260, objectFit: "cover", objectPosition: "50% 20%" }}
                loading="lazy"
              />
            </div>
            <div className="glass stat-card">
              <span className="num text-gradient">React</span>
              <span className="label">Frontend</span>
            </div>
            <div className="glass stat-card">
              <span className="num text-gradient">.NET</span>
              <span className="label">Backend</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;