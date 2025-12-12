import { Code2, Palette, Rocket, Users } from "lucide-react";

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
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="section-badge inline-flex">À propos</div>
          <h2 className="section-title">
            Qui suis-je<span className="gradient-text">?</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div>
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
              {["React.js", "Spring Boot", "Node.js", "PostgreSQL", "MongoDB", "AWS"].map((tech) => (
                <span key={tech} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-modern p-6 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="icon-box mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
