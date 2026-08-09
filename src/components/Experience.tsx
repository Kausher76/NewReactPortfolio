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
        <div className="eyebrow">Experience</div>
        <h2 className="section-title">Where I've worked</h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="glass tl-card" key={i}>
              <div className="tl-top">
                <div>
                  <h3 className="tl-role">{exp.role}</h3>
                  <div className="tl-meta">
                    <span className="org">{exp.company}</span> · {exp.location}
                  </div>
                </div>
                <div className="tl-right">
                  <span className="tl-period">{exp.period}</span>
                  <span className="tl-badge">{exp.type}</span>
                </div>
              </div>

              <div className="tl-tech-row">
                {exp.tech.map((t, j) => (
                  <span className="tl-tech-tag" key={j}>{t}</span>
                ))}
              </div>

              <ul className="tl-points">
                {exp.points.map((pt, j) => (
                  <li key={j}>
                    <span className="bullet" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;