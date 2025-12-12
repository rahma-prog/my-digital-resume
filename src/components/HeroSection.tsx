import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl animate-float opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(262 83% 58% / 0.4) 0%, transparent 70%)' }} 
        />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl animate-float delay-300 opacity-25"
          style={{ background: 'radial-gradient(circle, hsl(173 80% 40% / 0.4) 0%, transparent 70%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl animate-pulse-slow opacity-15"
          style={{ background: 'radial-gradient(circle, hsl(280 70% 55% / 0.3) 0%, transparent 70%)' }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ 
            backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="section-badge animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Disponible pour de nouvelles opportunités
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-up delay-100 tracking-tight leading-[0.9]">
              Rahma<br />
              <span className="gradient-text">Bouzguenda</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 animate-fade-up delay-200 font-heading font-medium">
              Étudiante Ingénieur en Génie Logiciel
            </p>
            
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-up delay-300 leading-relaxed text-lg">
              Passionnée par le développement web et mobile, je crée des applications 
              modernes et performantes avec React, Spring Boot et Node.js.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-up delay-400">
              <a href="#contact" className="btn-primary">
                <Mail size={18} />
                Me contacter
              </a>
              <a href="#projects" className="btn-outline">
                <Download size={18} />
                Voir mes projets
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-up delay-500">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="mailto:rahma.bouzguenda@polytechnicien.tn"
                className="group w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} className="text-muted-foreground group-hover:text-accent-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute -inset-4 rounded-full opacity-60 animate-pulse-slow"
                style={{ background: 'linear-gradient(135deg, hsl(262 83% 58% / 0.3) 0%, hsl(173 80% 40% / 0.3) 100%)', filter: 'blur(20px)' }}
              />
              
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-border/50 shadow-2xl">
                <div className="w-full h-full gradient-bg-hero flex items-center justify-center">
                  <span className="text-7xl sm:text-8xl lg:text-9xl font-heading font-bold text-primary-foreground/90">
                    RB
                  </span>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 px-5 py-3 rounded-2xl glass-card shadow-lg animate-float delay-500">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👋</span>
                <span className="font-medium text-sm">Bonjour!</span>
              </div>
            </div>
            
            {/* Tech badge */}
            <div className="absolute -top-2 -left-6 px-4 py-2 rounded-xl glass-card shadow-lg animate-float delay-200">
              <span className="text-sm font-medium gradient-text">Full-Stack Dev</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <a href="#about" className="animate-bounce">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
