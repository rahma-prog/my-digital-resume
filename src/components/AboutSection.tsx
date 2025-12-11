import { Code2, Palette, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Développement Full-Stack",
    description: "React, Spring Boot, Node.js",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces modernes et responsives",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Code optimisé et scalable",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Méthodologie Agile Scrum",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">À propos</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Qui suis-je ?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Étudiante en dernière année de <strong className="text-foreground">Génie Logiciel</strong> à 
              l'École Polytechnique de Sousse, je suis passionnée par le développement web et mobile.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Motivée, sérieuse et curieuse</strong>, je maîtrise la 
              conception et la réalisation d'applications modernes. Mon parcours m'a permis de développer 
              une solide expertise en développement Full-Stack.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Je parle couramment <strong className="text-foreground">Arabe, Français et Anglais</strong>, 
              ce qui me permet de collaborer efficacement dans des environnements internationaux.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React.js", "Spring Boot", "Node.js", "PostgreSQL", "MongoDB", "AWS"].map((tech) => (
                <span key={tech} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-2xl card-hover border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-bg-accent flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
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
