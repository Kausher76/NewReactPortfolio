const experiences = [
  {
    role: "Full Stack Developer",
    company: "Prosares Solutions Pvt. Ltd.",
    location: "Mumbai, India",
    period: "Oct 2024 – Present",
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
    <section id="experience" className="experience-section">
      <div className="container">

        <div className="section-header">
          <h2>Experience</h2>
          <span className="divider-line" />
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-spine">
                <div className="exp-dot" />
                <div className="exp-line" />
              </div>

              <div className="exp-card">
                <div className="exp-card-top">
                  <div>
                    <h4 className="exp-role">{exp.role}</h4>
                    <div className="exp-meta">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-separator">·</span>
                      <span className="exp-location">{exp.location}</span>
                    </div>
                  </div>
                  <div className="exp-right">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-type-badge">{exp.type}</span>
                  </div>
                </div>

                <div className="exp-tech-row">
                  {exp.tech.map((t, j) => (
                    <span className="exp-tech-tag" key={j}>{t}</span>
                  ))}
                </div>

                <ul className="exp-points">
                  {exp.points.map((pt, j) => (
                    <li key={j}>
                      <span className="exp-bullet">▸</span>
                      {pt}
                    </li>
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