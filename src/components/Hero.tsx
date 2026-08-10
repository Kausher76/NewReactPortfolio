import profile from "../assets/IMG_20251223_170929465~2.jpg";
import resumePdf from "../assets/Kausher_Imam_Alam9-1718613457807.pdf";

function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="glow-orb"
        style={{ width: 480, height: 480, top: -120, left: "10%", background: "var(--gradient)" }}
      />
      <div
        className="glow-orb"
        style={{ width: 360, height: 360, top: 80, right: "5%", background: "var(--accent-3)" }}
      />

      <div className="container hero-grid">
        <div>
          <div className="hero-badge glass">
            <span className="dot" aria-hidden="true" />
            Available for work
          </div>

          <h1>
            Full-stack developer<br />
            building on <span className="text-gradient">React &amp; .NET</span>
          </h1>

          <p className="hero-subtitle">
            I'm <strong>Kausher Imam Alam</strong>, based in Mumbai — I build React front
            ends on .NET Core APIs, backed by SQL Server.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-gradient">
              View projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href={resumePdf} download className="btn btn-glass">
              Download résumé
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
              </svg>
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num text-gradient">2+</div>
              <div className="label">Years experience</div>
            </div>
            <div className="hero-stat">
              <div className="num text-gradient">10+</div>
              <div className="label">Projects built</div>
            </div>
            <div className="hero-stat">
              <div className="num text-gradient">3</div>
              <div className="label">Core technologies</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <img src={profile} alt="Kausher Imam Alam" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;