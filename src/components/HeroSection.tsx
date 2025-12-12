import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(262 83% 58% / 0.4) 0%, transparent 70%)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, hsl(173 80% 40% / 0.4) 0%, transparent 70%)' }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, hsl(280 70% 55% / 0.3) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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
            <motion.div 
              className="section-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Disponible pour de nouvelles opportunités
            </motion.div>
            
            <motion.h1 
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-[0.9]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Rahma<br />
              <span className="gradient-text">Bouzguenda</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground mb-4 font-heading font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Étudiante Ingénieur en Génie Logiciel
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Passionnée par le développement web et mobile, je crée des applications 
              modernes et performantes avec React, Spring Boot et Node.js.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="/CV_Rahma_Bouzguenda.pdf" download className="btn-primary">
                <Download size={18} />
                Télécharger mon CV
              </a>
              <a href="#contact" className="btn-outline">
                <Mail size={18} />
                Me contacter
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com", icon: Github, label: "GitHub" },
                { href: "mailto:rahma.bouzguenda@polytechnicien.tn", icon: Mail, label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glowing ring */}
              <motion.div 
                className="absolute -inset-4 rounded-full opacity-60"
                style={{ background: 'linear-gradient(135deg, hsl(262 83% 58% / 0.3) 0%, hsl(173 80% 40% / 0.3) 100%)', filter: 'blur(20px)' }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
            <motion.div 
              className="absolute -bottom-4 -right-4 px-5 py-3 rounded-2xl glass-card shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">👋</span>
                <span className="font-medium text-sm">Bonjour!</span>
              </div>
            </motion.div>
            
            {/* Tech badge */}
            <motion.div 
              className="absolute -top-2 -left-6 px-4 py-2 rounded-xl glass-card shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="text-sm font-medium gradient-text">Full-Stack Dev</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.a 
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
