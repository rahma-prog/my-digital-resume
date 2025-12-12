import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border bg-secondary/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading text-lg font-bold text-foreground">
              Rahma<span className="gradient-text">.</span>
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Fait avec</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>en Tunisie</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
