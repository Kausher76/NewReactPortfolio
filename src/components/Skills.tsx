const skills = [
  { name: "React",       icon: "⚛️",  color: "#61DAFB" },
  { name: ".NET Core",   icon: "💠",  color: "#512BD4" },
  { name: "SQL Server",  icon: "🗄️",  color: "#CC2927" },
  { name: "JavaScript",  icon: "🟨",  color: "#F7DF1E" },
  { name: "C#",          icon: "🔷",  color: "#239120" },
  { name: "REST API",    icon: "</>", color: "#555" },
];

function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="mb-4">Skills</h2>
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