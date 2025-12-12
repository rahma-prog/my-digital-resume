import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Rental App",
    description:
      "Application MERN Stack de gestion de locations immobilières permettant l'ajout, la modification, la suppression et la consultation des propriétés.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: ["CRUD complet", "API REST", "Interface responsive"],
    gradient: "from-primary to-purple-500",
  },
  {
    title: "Gestion Cabinet Médical",
    description:
      "Application complète de gestion de cabinet médical intégrant la prise de rendez-vous, la gestion des dossiers patients et le suivi des consultations.",
    technologies: ["React.js", "Spring Boot", "PostgreSQL"],
    features: ["Prise de rendez-vous", "Dossiers patients", "APIs REST"],
    gradient: "from-accent to-teal-400",
  },
  {
    title: "Plateforme d'Évaluation",
    description:
      "Plateforme d'évaluation des tests techniques pour renforcer les compétences des développeurs chez Proxym IT Group.",
    technologies: ["React.js", "Nest.js", "PostgreSQL"],
    features: ["Gestion utilisateurs", "Rôles & permissions", "Tests techniques"],
    gradient: "from-orange-500 to-amber-400",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="section-badge inline-flex">Portfolio</div>
          <h2 className="section-title">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project Header with gradient */}
              <div className={`h-44 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-end relative overflow-hidden`}>
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10 blur-lg" />
                
                <h3 className="font-heading text-xl font-bold text-white relative z-10">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-5 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs text-muted-foreground flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium group/btn">
                    <Github size={16} />
                    Code
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl gradient-bg-accent text-accent-foreground hover:opacity-90 transition-all text-sm font-medium group/btn">
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
