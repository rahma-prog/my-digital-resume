import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rahma.bouzguenda@polytechnicien.tn",
      href: "mailto:rahma.bouzguenda@polytechnicien.tn",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+216 93 753 017",
      href: "tel:+21693753017",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Sousse, Tunisie",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(173 80% 40%) 0%, transparent 70%)' }}
        />
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="section-badge inline-flex">Contact</div>
          <h2 className="section-title">
            Travaillons <span className="gradient-text">Ensemble</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6">
              Prenons contact
            </h3>
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
              Je suis toujours ouverte à discuter de nouveaux projets, d'opportunités 
              créatives ou de collaboration. N'hésitez pas à me contacter !
            </p>

            <div className="space-y-5 mb-10">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-medium hover:text-primary transition-colors flex items-center gap-1 group/link"
                      >
                        {info.value}
                        <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4 font-medium">Retrouvez-moi sur</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-modern p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-modern"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-modern"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-modern"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-modern resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Envoi en cours...
                  </span>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
