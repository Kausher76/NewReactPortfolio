const skillGroups = [
  {
    label: "Frontend",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: ["React", "JavaScript", "TypeScript", "HTML / CSS"],
  },
  {
    label: "Backend",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="8" rx="2" /><rect x="2" y="13" width="20" height="8" rx="2" /><circle cx="6" cy="7" r="0.5" fill="currentColor" /><circle cx="6" cy="17" r="0.5" fill="currentColor" />
      </svg>
    ),
    items: [".NET Core", "C#", "REST APIs", "Node.js"],
  },
  {
    label: "Data & Tooling",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0018 0V5" /><path d="M3 12a9 3 0 0018 0" />
      </svg>
    ),
    items: ["SQL Server", "PostgreSQL", "Git / GitHub", "Azure"],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="eyebrow">Skills</div>
        <h2 className="section-title">Technologies I work with</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="glass skill-tile" key={group.label}>
              <div className="skill-tile-icon">{group.icon}</div>
              <div className="skill-tile-label">{group.label}</div>
              <div className="skill-pills">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;