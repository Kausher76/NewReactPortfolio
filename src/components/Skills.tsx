const skills = [
  { name: "React",       icon: "⚛️" },
  { name: ".NET Core",   icon: "💠" },
  { name: "SQL Server",  icon: "🗄️" },
  { name: "JavaScript",  icon: "🟨" },
  { name: "C#",          icon: "🔷" },
  { name: "REST API",    icon: "</>" },
];

function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">

        <div className="section-header">
          <h2>Skills</h2>
          <span className="divider-line" />
        </div>

        <div className="row">
          {skills.map((s, i) => (
            <div className="col-md-4 col-6 mb-3" key={i}>
              <div className="skill-card">
                <span className="skill-icon">{s.icon}</span>
                <span>{s.name}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;