import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Rental App",
    description:
      "Application MERN Stack de gestion de locations immobilières permettant l'ajout, la modification, la suppression et la consultation des propriétés.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "CRUD complet",
      "API REST",
      "Interface responsive",
      "Architecture modulaire",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Gestion de Cabinet Médical",
    description:
      "Application complète de gestion de cabinet médical intégrant la prise de rendez-vous, la gestion des dossiers patients et le suivi des consultations.",
    technologies: ["React.js", "Spring Boot", "PostgreSQL"],
    features: [
      "Prise de rendez-vous",
      "Dossiers patients",
      "Suivi consultations",
      "APIs REST",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Plateforme d'Évaluation",
    description:
      "Plateforme d'évaluation des tests techniques pour renforcer les compétences des développeurs chez Proxym IT Group.",
    technologies: ["React.js", "Nest.js", "PostgreSQL", "Postman"],
    features: [
      "Gestion des utilisateurs",
      "Rôles et permissions",
      "Tests techniques",
      "Documentation API",
    ],
    color: "from-orange-500 to-amber-500",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Portfolio</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
            >
              {/* Project Header */}
              <div className={`h-40 bg-gradient-to-br ${project.color} p-6 flex items-end`}>
                <h3 className="font-heading text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-xs text-muted-foreground flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-all text-sm font-medium">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
