import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "WOW – Way of Working (CRM)",
    desc: "CRM system managing projects, requirements, and task assignments with calendar and timesheet features for tracking daily tasks, employee schedules, and work hours.",
    image: "https://wow.azurewebsites.net/static/media/wow-logo.ddc6f20dcba5fe03b6e1.png",
    tech: ["React", ".NET", "SQL Server"],
    live: "#",
    github: "#",
  },
  {
    title: "CR3 – Training Score Management",
    desc: "Training management system for construction workers with site-based registration, PDF assessments, approval workflow, and bulk upload APIs for candidate registration.",
    image: "https://cr3.group/wp-content/uploads/2022/04/logo.png",
    tech: ["React", ".NET", "SQL Server"],
    live: "#",
    github: "#",
  },
  {
    title: "News App",
    desc: "News application providing latest headlines categorized into Business, Entertainment, Health, Science, Sports, and Technology using the newsdata.io API.",
    image: "https://s.newsdata.io/assets/logoUpdated-DtPdDjwG.png?v=1.1.0",
    tech: ["React", "newsdata.io API"],
    live: "https://react-news-app-8e38.vercel.app/",
    github: "#",
  },
  {
    title: "Afcons – Medical Records Management",
    desc: "Manages medical camps across multiple sites, tracks medicine stock, handles prescriptions, and supports Doctor, First Aider, and Admin roles for site medical operations.",
    image: "https://afcons.com/wp-content/uploads/2026/01/Afcons-Logo-Rounded.png",
    tech: ["React", ".NET", "SQL Server"],
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">

        <div className="section-header">
          <h2>Projects</h2>
          <span className="divider-line" />
        </div>

        <div className="row">
          {projects.map((p, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <div className="project-card h-100">

                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ background: "var(--bg-secondary)", height: "140px", borderBottom: "1px solid var(--border-color)" }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ maxHeight: "60px", objectFit: "contain", opacity: 0.9 }}
                  />
                </div>

                <div className="p-3">
                  <h5 className="fw-bold mb-2">{p.title}</h5>
                  <p className="text-muted mb-3">{p.desc}</p>

                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: "var(--text-muted)",
                          background: "var(--badge-bg)",
                          border: "1px solid var(--badge-border)",
                          borderRadius: "4px",
                          padding: "2px 7px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    {p.live !== "#" && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm px-3">
                        View Project
                      </a>
                    )}
                    <a href={p.live} className="text-secondary"><FaExternalLinkAlt size={13} /></a>
                    <a href={p.github} className="text-secondary"><FaGithub size={14} /></a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;