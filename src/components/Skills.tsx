const skillGroups = [
  {
    label: "frontend",
    items: ["React", "JavaScript", "TypeScript", "HTML / CSS"],
  },
  {
    label: "backend",
    items: [".NET Core", "C#", "REST APIs", "Node.js"],
  },
  {
    label: "data & tooling",
    items: ["SQL Server", "PostgreSQL", "Git / GitHub", "Azure"],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="eyebrow">
          <span className="method get">GET</span>
          <span className="path">/skills</span>
        </div>
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-col" key={group.label}>
              <div className="skill-col-label">{group.label}</div>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;