import resumePdf from "../assets/Kausher_Imam_Alam9-1718613457807.pdf";

function Hero() {
  return (
    <section className="hero" id="home" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="container hero-grid">
        <div>
          <div className="hero-status">
            <span className="dot" aria-hidden="true" />
            available for work
          </div>

          <h1>Kausher Imam Alam</h1>

          <p className="hero-subtitle">
            Full-stack developer building <strong>React</strong> front ends on{" "}
            <strong>.NET Core</strong> APIs backed by <strong>SQL Server</strong>.
            Based in Mumbai, India.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-solid">
              view projects →
            </a>
            <a href={resumePdf} download className="btn btn-outline">
              download résumé ↓
            </a>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-bar">
            <span /><span /><span />
          </div>
          <div className="terminal-body">
            <div><span className="prompt">kausher@mumbai</span>:~$ <span className="cmd">whoami</span></div>
            <div className="out">kausher_imam_alam</div>
            <div style={{ height: 10 }} />
            <div><span className="prompt">kausher@mumbai</span>:~$ <span className="cmd">cat status.json</span></div>
            <div className="out">
              {"{"}
              {"\n  "}<span className="key">"role"</span>: <span className="str">"Full Stack Developer"</span>,
              {"\n  "}<span className="key">"based_in"</span>: <span className="str">"Mumbai, IN"</span>,
              {"\n  "}<span className="key">"available"</span>: true,
              {"\n  "}<span className="key">"stack"</span>: [<span className="str">"React"</span>, <span className="str">".NET Core"</span>, <span className="str">"SQL Server"</span>]
              {"\n}"}
            </div>
            <div style={{ height: 10 }} />
            <div>
              <span className="prompt">kausher@mumbai</span>:~$ <span className="cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;