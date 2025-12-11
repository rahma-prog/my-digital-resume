import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Stage d'été",
    company: "Reactit",
    period: "Juillet 2025 – Août 2025",
    description: [
      "Conception et développement d'une application de gestion de rendez-vous",
      "Backend robuste avec Java / Spring Boot et PostgreSQL",
      "Interface utilisateur en React, moderne et responsive",
      "Collaboration avec Git/GitHub",
    ],
  },
  {
    type: "work",
    title: "Stage PFE",
    company: "Proxym IT Group",
    period: "Février 2023 – Juillet 2023",
    description: [
      "Développement d'une plateforme d'évaluation des tests techniques",
      "Conception du module de gestion des utilisateurs avec rôles",
      "Documentation et test des API avec Postman",
      "Architecture modulaire et bonnes pratiques",
    ],
  },
];

const education = [
  {
    degree: "Diplôme d'Ingénieur en Génie Logiciel",
    school: "École Polytechnique de Sousse",
    period: "2023 – Présent",
    status: "En cours",
  },
  {
    degree: "Licence en Génie Logiciel",
    school: "ESSTHS Hammam Sousse",
    period: "2021 – 2023",
    status: "Obtenu",
  },
  {
    degree: "Cycle Préparatoire Math-Physique",
    school: "ESSTHS Hammam Sousse",
    period: "2017 – 2020",
    status: "Terminé",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Parcours</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Expérience & Formation
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl gradient-bg-accent flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Expérience Professionnelle</h3>
            </div>

            <div className="relative pl-8 space-y-8">
              <div className="timeline-line ml-1.5" />
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="timeline-dot top-2 ml-1.5" />
                  <div className="bg-card p-6 rounded-2xl border border-border card-hover">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-heading font-semibold text-lg">{exp.title}</h4>
                      <span className="text-accent font-medium">@ {exp.company}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl gradient-bg-hero flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Formation</h3>
            </div>

            <div className="relative pl-8 space-y-6">
              <div className="timeline-line ml-1.5" style={{ background: "hsl(var(--primary))" }} />
              
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div 
                    className="timeline-dot top-2 ml-1.5" 
                    style={{ background: "hsl(var(--primary))" }} 
                  />
                  <div className="bg-card p-6 rounded-2xl border border-border card-hover">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-heading font-semibold">{edu.degree}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        edu.status === "En cours" 
                          ? "bg-accent/20 text-accent" 
                          : "bg-secondary text-secondary-foreground"
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-primary font-medium text-sm mb-1">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
