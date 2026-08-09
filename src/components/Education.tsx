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
        <div className="eyebrow">Education</div>
        <h2 className="section-title">Academic background</h2>

        <div className="timeline">
          {educations.map((edu, i) => (
            <div className="glass tl-card" key={i}>
              <div className="tl-top">
                <div>
                  <h3 className="tl-role">{edu.degree}</h3>
                  <div className="tl-meta">
                    <span className="org">{edu.institution}</span> · {edu.location}
                  </div>
                </div>
                <div className="tl-right">
                  <span className="tl-period">{edu.period}</span>
                  <span className="tl-badge">{edu.score}</span>
                </div>
              </div>

              <ul className="tl-points">
                {edu.highlights.map((pt, j) => (
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

export default Education;