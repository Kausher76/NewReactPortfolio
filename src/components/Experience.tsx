const experiences = [
  {
    role: "Full Stack Developer",
    company: "Prosares Solutions Pvt. Ltd.",
    location: "Mumbai, India",
    period: "Oct 2024 — Present",
    type: "Full-time",
    tech: [".NET Core Web API", "ReactJS", "MS SQL Server", "SharePoint"],
    points: [
      "Developing and maintaining web applications using .NET Core Web API, ReactJS, and MS SQL Server.",
      "Built modules for CRM, medical records, and training management systems.",
      "Created reusable frontend components and optimized backend APIs and SQL procedures.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="eyebrow">
          <span className="method get">GET</span>
          <span className="path">/experience</span>
        </div>
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-rail">
                <span className="tl-period">{exp.period}</span>
                <div className="tl-line" />
              </div>

              <div className="tl-card">
                <div className="tl-top">
                  <div>
                    <h3 className="tl-role">{exp.role}</h3>
                    <div className="tl-meta">
                      <span className="org">{exp.company}</span> · {exp.location}
                    </div>
                  </div>
                  <span className="tl-badge">{exp.type}</span>
                </div>

                <div className="tl-tech-row">
                  {exp.tech.map((t, j) => (
                    <span className="tl-tech-tag" key={j}>{t}</span>
                  ))}
                </div>

                <ul className="tl-points">
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;