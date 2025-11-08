import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--code-bg))] text-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:vsamina1@depaul.edu"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-foreground/60">
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
