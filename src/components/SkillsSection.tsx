import { Code, Database, Cloud, Wrench, MessageCircle, Globe } from "lucide-react";

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
  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(262 83% 58%) 0%, transparent 70%)' }}
      />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="section-badge inline-flex">Expertise</div>
          <h2 className="section-title">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-modern p-6 group"
            >
              <div className="icon-box mb-5 group-hover:scale-110 transition-transform duration-300">
                <category.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="card-modern p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-box-accent">
              <Globe className="w-5 h-5 text-accent-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold">Langues</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((lang) => (
              <div key={lang.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">{lang.level}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${lang.percentage}%`,
                      background: 'var(--gradient-primary)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
