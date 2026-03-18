import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "WOW - Way of Working (CRM System)",
    desc: "Worked on a CRM system that manages projects, requirements, and task assignments. Integrated calendar and timesheet features for tracking daily tasks, employee schedules, and work hours, improving team productivity and workflow management.",
    image: "https://wow.azurewebsites.net/static/media/wow-logo.ddc6f20dcba5fe03b6e1.png",
    tech: ["React, ", " .NET, ", " and SQL Server"],
    live: "#",
    github: "#",
  },
  {
    title: "CR3 - Training Score Management Tool",
    desc: "Developed a training management system for construction workers with site-based registration, PDF assessments, and an approval workflow for pass/fail evaluation, improving training efficiency and performance tracking. Also developed APIs for bulk upload for candidate registration.",
    image: "https://cr3.group/wp-content/uploads/2022/04/logo.png",
    tech: ["React, ", " .NET, ", " and SQL Server"],
    live: "#",
    github: "#",
  },
  {
    title: "News App",
    desc: "Developed a News App using React.js, providing users with the latest headlines categorized into different topics like Business, Entertainment, Health, Science, Sports, and Technology.",
    image: "https://s.newsdata.io/assets/logoUpdated-DtPdDjwG.png?v=1.1.0",
    tech: ["React, ", "newsdata.io Api, ", " and MIUI"],
    live: "https://react-news-app-8e38.vercel.app/",
    github: "#",
  },
  {
    title: "Afcons - Site Medical Records Management Application",
    desc: "Afcons Site Medical Records Management Application manages medical camps across multiple sites and tracks medicine stock. It handles medical camp creation and provides various reports. Users can download prescriptions directly from the system. The application supports three roles: Doctor, First Aider, and Admin, ensuring efficient management of site medical operations.",
    image: "https://afcons.com/wp-content/uploads/2026/01/Afcons-Logo-Rounded.png",
    tech: ["React, ", " .NET, ", " and SQL Server"],
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="mb-4">Projects</h2>
        <div className="row">
          {projects.map((p, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <div className="project-card shadow-sm h-100">
                
                {/* Image */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ background: "#0d1117", height: "160px" }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ maxHeight: "80px", objectFit: "contain" }}
                  />
                </div>

                {/* Content */}
                <div className="p-3">
                  <h5 className="fw-bold mb-2">{p.title}</h5>
                  <p className="text-muted small mb-3">{p.desc}</p>
                  <strong><p className="text-muted small mb-3">{p.tech}</p></strong>

                  <div className="d-flex align-items-center gap-3">
                    <a href={p.live} className="btn btn-primary btn-sm px-3">
                      View Project
                    </a>
                    <a href={p.live} className="text-secondary">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={p.github} className="text-secondary">
                      <FaGithub />
                    </a>
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