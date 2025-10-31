import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            ABOUT ME
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Who am I?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-primary to-secondary overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full blur-2xl opacity-50 animate-pulse-glow"></div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6 order-1 lg:order-2 animate-fade-in-up">
            <Card className="p-6 sm:p-8 bg-card border-2 hover:border-primary/50 transition-all duration-300">
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                Hey there, I'm <span className="font-bold text-primary">YOUR NAME</span>! 
                I'm a full-stack developer passionate about building scalable applications with{" "}
                <span className="font-semibold text-secondary">Java</span>,{" "}
                <span className="font-semibold text-secondary">Spring Boot</span>,{" "}
                <span className="font-semibold text-secondary">React.js</span>, and{" "}
                <span className="font-semibold text-secondary">Redux Toolkit</span>.
              </p>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mt-4">
                I love turning complex problems into elegant solutions and creating intuitive user experiences. 
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community.
              </p>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mt-4">
                My approach combines robust backend architecture with modern, responsive frontend design. 
                I believe in writing clean, maintainable code and continuously improving my craft.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
