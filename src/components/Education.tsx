const educations = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Sardar Patel Institute of Technology",
    location: "Mumbai, India",
    period: "2022 – 2024",
    cgpa: "7.0 / 10",
    grade: "CGPA",
    icon: "🎓",
    highlights: [
      "Specialized in Full Stack Web Development and Database Management.",
      "Worked on projects involving React, .NET Core, and SQL Server.",
    ],
  },
  {
    degree: "Bachelor of Science in Mathematics (BSc Mathematics)",
    institution: "Anugrah Narayan College, Magadh University",
    location: "Patna, Bihar, India",
    period: "2017 – 2020",
    cgpa: "66.67%",
    grade: "Percentage",
    icon: "📐",
    highlights: [
      "Built strong foundation in Mathematics including Algebra, Calculus, and Statistics.",
      "Developed analytical and problem-solving skills.",
    ],
  },
  {
    degree: "Intermediate of Science (I.Sc.)",
    institution: "Bihar State Education Board, Patna",
    location: "Patna, Bihar, India",
    period: "2015 – 2017",
    cgpa: "55.20%",
    grade: "Percentage",
    icon: "🔬",
    highlights: [
      "Studied core subjects including Physics, Chemistry, and Mathematics.",
      "Developed foundational analytical and problem-solving skills.",
    ],
  },
  {
    degree: "Matriculation (10th Grade)",
    institution: "Kendriya Vidyalaya Khagaul, Patna",
    location: "Patna, Bihar, India",
    period: "2015",
    cgpa: "8.2 / 10",
    grade: "CGPA",
    icon: "📚",
    highlights: [
      "Completed core subjects including Mathematics, Science, and English.",
      "Built a strong academic foundation and discipline.",
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
                  <span>{edu.icon}</span>
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