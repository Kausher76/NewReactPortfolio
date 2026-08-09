const educations = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Sardar Patel Institute of Technology",
    location: "Mumbai, India",
    period: "2022 — 2024",
    score: "7.0 CGPA",
    highlights: [
      "Specialized in Full Stack Web Development and Database Management.",
      "Worked on projects involving React, .NET Core, and SQL Server.",
    ],
  },
  {
    degree: "BSc Mathematics",
    institution: "Anugrah Narayan College, Magadh University",
    location: "Patna, Bihar, India",
    period: "2017 — 2020",
    score: "66.67%",
    highlights: [
      "Built strong foundation in Algebra, Calculus, and Statistics.",
      "Developed analytical and problem-solving skills.",
    ],
  },
  {
    degree: "Intermediate of Science",
    institution: "Bihar State Education Board, Patna",
    location: "Patna, Bihar, India",
    period: "2015 — 2017",
    score: "55.20%",
    highlights: [
      "Studied core subjects including Physics, Chemistry, and Mathematics.",
    ],
  },
  {
    degree: "Matriculation (10th Grade)",
    institution: "Kendriya Vidyalaya Khagaul, Patna",
    location: "Patna, Bihar, India",
    period: "2015",
    score: "8.2 CGPA",
    highlights: [
      "Completed core subjects including Mathematics, Science, and English.",
    ],
  },
];

function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="eyebrow">
          <span className="method get">GET</span>
          <span className="path">/education</span>
        </div>
        <h2 className="section-title">Education</h2>

        <div className="timeline">
          {educations.map((edu, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-rail">
                <span className="tl-period">{edu.period}</span>
                <div className="tl-line" />
              </div>

              <div className="tl-card">
                <div className="tl-top">
                  <div>
                    <h3 className="tl-role">{edu.degree}</h3>
                    <div className="tl-meta">
                      <span className="org">{edu.institution}</span> · {edu.location}
                    </div>
                  </div>
                  <span className="tl-score">{edu.score}</span>
                </div>

                <ul className="tl-points">
                  {edu.highlights.map((pt, j) => (
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

export default Education;