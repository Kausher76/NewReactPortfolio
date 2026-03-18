
import profile from "../assets/IMG_20260227_204248089.jpg";
import resumePdf from "../assets/Kausher_Imam_Alam9-1718613457807.pdf";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          <div className="hero-text">
            <span className="hero-badge">Available for Work</span>
            <h1>Kausher Imam Alam</h1>
            <p className="hero-subtitle">
              Full Stack Developer specializing in <strong>React</strong>, <strong>.NET</strong>, and <strong>SQL Server</strong>.
            </p>
            
            <div className="hero-actions">
              <a href="#projects" className="btn-solid">View Projects</a>
              <a href={resumePdf} download className="btn-ghost">Download Resume</a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img src={profile} className="hero-photo" alt="Kausher Imam Alam" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;