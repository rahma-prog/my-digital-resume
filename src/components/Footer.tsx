import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Rahma Bouzguenda. Tous droits réservés.</span>
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Fait avec</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>en Tunisie</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
