const educations = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Sardar Patel Institute of Technology",
    location: "Mumbai, India",
    period: "2022 – 2024",
    cgpa: "7.0",
    grade: "CGPA",
    highlights: [
      "Specialized in Full Stack Web Development and Database Management.",
      "Worked on projects involving React, .NET Core, and SQL Server.",
    ],
  },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">

        <div className="section-header">
          <h2>Education</h2>
          <span className="divider-line" />
        </div>

        <div className="edu-timeline">
          {educations.map((edu, i) => (
            <div className="edu-item" key={i}>
              <div className="edu-spine">
                <div className="edu-dot">
                  <span>🎓</span>
                </div>
                <div className="edu-line" />
              </div>

              <div className="edu-card">
                <div className="edu-card-top">
                  <div>
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <div className="edu-meta">
                      <span className="edu-institution">{edu.institution}</span>
                      <span className="edu-separator">·</span>
                      <span className="edu-location">{edu.location}</span>
                    </div>
                  </div>
                  <div className="edu-right">
                    <span className="edu-period">{edu.period}</span>
                    <div className="edu-score-badge">
                      <span className="edu-score-label">{edu.grade}</span>
                      <span className="edu-score-value">{edu.cgpa}</span>
                    </div>
                  </div>
                </div>

                <ul className="edu-points">
                  {edu.highlights.map((pt, j) => (
                    <li key={j}>
                      <span className="edu-bullet">▸</span>
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

export default Education;