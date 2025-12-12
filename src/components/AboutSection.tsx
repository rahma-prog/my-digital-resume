import { Code2, Palette, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack",
    description: "React, Spring Boot, Node.js",
  },
  {
    icon: Palette,
    title: "UI/UX",
    description: "Interfaces modernes",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Code optimisé",
  },
  {
    icon: Users,
    title: "Agile",
    description: "Méthodologie Scrum",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge inline-flex">À propos</div>
          <h2 className="section-title">
            Qui suis-je<span className="gradient-text">?</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Étudiante en dernière année de <strong className="text-foreground font-semibold">Génie Logiciel</strong> à 
              l'École Polytechnique de Sousse, je suis passionnée par le développement web et mobile.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground font-semibold">Motivée, sérieuse et curieuse</strong>, je maîtrise la 
              conception et la réalisation d'applications modernes avec une solide expertise en développement Full-Stack.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Je parle couramment <strong className="text-foreground font-semibold">Arabe, Français et Anglais</strong>, 
              facilitant la collaboration dans des environnements internationaux.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React.js", "Spring Boot", "Node.js", "PostgreSQL", "MongoDB", "AWS"].map((tech, index) => (
                <motion.span 
                  key={tech} 
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="card-modern p-6 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="icon-box mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
