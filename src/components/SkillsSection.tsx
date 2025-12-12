import { Code, Database, Cloud, Wrench, MessageCircle, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Langages",
    icon: Code,
    skills: ["Java", "JavaScript", "Python", "C", "C++"],
  },
  {
    title: "Bases de données",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Frameworks",
    icon: Wrench,
    skills: ["React.js", "Nest.js", "Node.js", "Express.js", "Spring Boot"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Azure", "Git", "GitHub"],
  },
  {
    title: "Outils",
    icon: Wrench,
    skills: ["Scrum Agile", "Power BI", "NLP", "Postman"],
  },
  {
    title: "Soft Skills",
    icon: MessageCircle,
    skills: ["Organisation", "Communication", "Travail en équipe", "Autonomie"],
  },
];

const languages = [
  { name: "Arabe", level: "Natif", percentage: 100 },
  { name: "Français", level: "Courant", percentage: 90 },
  { name: "Anglais", level: "Courant", percentage: 85 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(262 83% 58%) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="section-container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge inline-flex">Expertise</div>
          <h2 className="section-title">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="card-modern p-6 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="icon-box mb-5 group-hover:scale-110 transition-transform duration-300">
                <category.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skill} 
                    className="skill-tag text-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div 
          className="card-modern p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-box-accent">
              <Globe className="w-5 h-5 text-accent-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold">Langues</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((lang, index) => (
              <div key={lang.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">{lang.level}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'var(--gradient-primary)' }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.percentage}%` } : {}}
                    transition={{ duration: 1, delay: 0.7 + index * 0.2, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
