import { Briefcase, GraduationCap, Calendar } from "lucide-react";

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
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="section-badge inline-flex">Parcours</div>
          <h2 className="section-title">
            Expérience & <span className="gradient-text">Formation</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="icon-box">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Expérience Professionnelle</h3>
            </div>

            <div className="relative pl-8 space-y-8">
              <div className="timeline-modern" />
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  <div className="timeline-dot-modern top-6" />
                  <div className="card-modern p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h4 className="font-heading font-semibold text-lg">{exp.title}</h4>
                      <span className="text-primary font-medium text-sm">@ {exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
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
            <div className="flex items-center gap-4 mb-10">
              <div className="icon-box-accent">
                <GraduationCap className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Formation</h3>
            </div>

            <div className="relative pl-8 space-y-6">
              <div className="timeline-modern" />
              
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  <div className="timeline-dot-modern top-6" />
                  <div className="card-modern p-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-heading font-semibold">{edu.degree}</h4>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ${
                        edu.status === "En cours" 
                          ? "bg-primary/10 text-primary" 
                          : "bg-secondary text-secondary-foreground"
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-accent font-medium text-sm mb-1">{edu.school}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
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
