import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge inline-flex">Parcours</div>
          <h2 className="section-title">
            Expérience & <span className="gradient-text">Formation</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Experience */}
          <div>
            <motion.div 
              className="flex items-center gap-4 mb-10"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="icon-box">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Expérience Professionnelle</h3>
            </motion.div>

            <div className="relative pl-8 space-y-8">
              <motion.div 
                className="timeline-modern"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ originY: 0 }}
              />
              
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="relative group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                >
                  <div className="timeline-dot-modern top-6" />
                  <motion.div 
                    className="card-modern p-6"
                    whileHover={{ x: 5 }}
                  >
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
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div 
              className="flex items-center gap-4 mb-10"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="icon-box-accent">
                <GraduationCap className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Formation</h3>
            </motion.div>

            <div className="relative pl-8 space-y-6">
              <motion.div 
                className="timeline-modern"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ originY: 0 }}
              />
              
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="relative group"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                >
                  <div className="timeline-dot-modern top-6" />
                  <motion.div 
                    className="card-modern p-6"
                    whileHover={{ x: 5 }}
                  >
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
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
