import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "WOW — Way of Working (CRM)",
    desc: "CRM system managing projects, requirements, and task assignments with calendar and timesheet features for tracking daily tasks, employee schedules, and work hours.",
    image: "https://wow.azurewebsites.net/static/media/wow-logo.ddc6f20dcba5fe03b6e1.png",
    tech: ["React", ".NET", "SQL Server"],
    live: "#",
    github: "#",
  },
  {
    title: "CR3 — Training Score Management",
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
    title: "Afcons — Medical Records Management",
    desc: "Manages medical camps across multiple sites, tracks medicine stock, handles prescriptions, and supports Doctor, First Aider, and Admin roles for site medical operations.",
    image: "https://afcons.com/wp-content/uploads/2026/01/Afcons-Logo-Rounded.png",
    tech: ["React", ".NET", "SQL Server"],
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="eyebrow">Projects</div>
        <h2 className="section-title">Selected work</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article className="glass project-card" key={i}>
              <div className="project-media">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech-row">
                  {p.tech.map((t, j) => (
                    <span className="project-tech-tag" key={j}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {p.live !== "#" && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-glass" style={{ padding: "8px 16px", fontSize: "0.8rem" }}>
                      Live site
                    </a>
                  )}
                  <a href={p.github} className="project-icon-link" aria-label="Source code">
                    <FaGithub size={14} />
                  </a>
                  {p.live !== "#" && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="project-icon-link" aria-label="Open live project">
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;