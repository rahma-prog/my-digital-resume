import { Code, Database, Cloud, Wrench, MessageCircle, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Langages",
    icon: Code,
    skills: ["Java", "JavaScript", "Python", "C", "C++"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Bases de données",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Frameworks",
    icon: Wrench,
    skills: ["React.js", "Nest.js", "Node.js", "Express.js", "Spring Boot"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Azure", "Git", "GitHub"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Outils & Méthodologies",
    icon: Wrench,
    skills: ["Scrum Agile", "Power BI", "NLP", "Postman"],
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Soft Skills",
    icon: MessageCircle,
    skills: ["Organisation", "Communication", "Travail en équipe", "Autonomie"],
    color: "from-indigo-500 to-blue-500",
  },
];

const languages = [
  { name: "Arabe", level: "Natif", percentage: 100 },
  { name: "Français", level: "Courant", percentage: 90 },
  { name: "Anglais", level: "Courant", percentage: 85 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Expertise</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Compétences
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 border border-border card-hover"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl gradient-bg-accent flex items-center justify-center">
              <Globe className="w-5 h-5 text-accent-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold">Langues</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.level}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-bg-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.percentage}%` }}
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
