import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import profile from "../assets/IMG_20251223_170929465~2.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT: photo */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img src={profile} className="about-img shadow" alt="About Kausher" />
          </div>

          {/* RIGHT: text */}
          <div className="col-md-8 ps-md-5">
            <h2>About Me</h2>
            <p>
              I'm a Full Stack Developer with experience in building scalable web applications
              using <b>React</b>, <b>.NET Core</b> and <b>SQL Server</b>. I am passionate about
              creating user-focused, high-performance applications that solve real-world problems.
            </p>

            <div className="about-badge mt-3">
              <span className="icon">⭐</span> 2+ Years of Experience
            </div>

            <div className="about-badge mt-2">
              <span className="icon">⚙️</span> React, .NET, SQL Server
            </div>

            <div className="d-flex align-items-center gap-3 mt-3 flex-wrap">
              <button className="btn btn-primary">Let's Connect</button>
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
