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
                Hey there, I'm <span className="font-bold text-primary">Vinodhkumar Saminathan</span>! 
                Software Engineer with <span className="font-semibold text-secondary">4+ years</span> of experience 
                specializing in cloud-native{" "}
                <span className="font-semibold text-secondary">Java services</span> and{" "}
                <span className="font-semibold text-secondary">distributed systems</span>.
              </p>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mt-4">
                I design and ship resilient microservices with{" "}
                <span className="font-semibold text-secondary">Spring Boot</span>,{" "}
                <span className="font-semibold text-secondary">Kafka</span>,{" "}
                <span className="font-semibold text-secondary">Docker/Kubernetes</span>, and automated pipelines 
                on <span className="font-semibold text-secondary">Azure</span> and{" "}
                <span className="font-semibold text-secondary">AWS</span>—improving reliability, latency, and cost at scale.
              </p>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mt-4">
                Currently pursuing <span className="font-semibold text-primary">M.S. in Computer Science</span> at DePaul University 
                while working as a Research Assistant, building Java mining pipelines and machine learning models for software engineering research.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
