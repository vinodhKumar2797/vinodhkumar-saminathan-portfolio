import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
const codeSnippet = `const developer = {
  name: 'Vinodhkumar Saminathan',
  role: 'Software Engineer',
  experience: '4+ years',
  backend: ['Java', 'Spring Boot', 
            'Microservices', 'Kafka'],
  frontend: ['React.js', 'TypeScript', 
             'GraphQL', 'Tailwind CSS'],
  cloud: ['AWS', 'Azure', 'Docker', 
          'Kubernetes'],
  passionate: true,
  hireable: () => {
    return this.passionate && 
           this.experience > '4 years';
  }
};`;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))] pt-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl text-foreground/80 font-medium">
                Hey there,
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                I am <span className="text-primary">Vinodhkumar Saminathan.</span>
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                I <span className="text-secondary">Build Scalable Systems.</span>
              </h1>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="mailto:vsamina1@depaul.edu"
                className="text-primary hover:text-secondary transition-colors"
              >
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                CONTACT ME
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 rounded-full"
              >
                <Download className="w-4 h-4 mr-2" />
                GET RESUME
              </Button>
            </div>
          </div>

          {/* Right Side - Code Snippet */}
          <div className="animate-fade-in flex justify-center lg:justify-end">
            <div className="bg-[hsl(var(--code-bg))] rounded-2xl shadow-2xl p-6 sm:p-8 max-w-lg w-full border border-primary/10">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm sm:text-base overflow-x-auto">
                <code className="text-[hsl(var(--code-text))] font-mono leading-relaxed">
                  <span className="text-[hsl(var(--code-keyword))]">const</span>{" "}
                  <span className="text-[hsl(var(--code-text))]">developer</span> ={" "}
                  {"{\n"}
                  {"  "}
                  <span className="text-[hsl(var(--code-string))]">name</span>:{" "}
                  <span className="text-[hsl(var(--code-keyword))]">'Vinodhkumar Saminathan'</span>,{"\n"}
                  {"  "}
                  <span className="text-[hsl(var(--code-string))]">role</span>:{" "}
                  <span className="text-[hsl(var(--code-keyword))]">'Software Engineer'</span>,{"\n"}
                  {"  "}
                  <span className="text-[hsl(var(--code-string))]">experience</span>:{" "}
                  <span className="text-[hsl(var(--code-keyword))]">'4+ years'</span>,{"\n"}
                  {"  "}
                  <span className="text-[hsl(var(--code-string))]">backend</span>: [
                  <span className="text-[hsl(var(--code-keyword))]">'Java'</span>,{" "}
                  <span className="text-[hsl(var(--code-keyword))]">'Spring Boot'</span>, {"\n"}
                  {"            "}
                  <span className="text-[hsl(var(--code-keyword))]">'Microservices'</span>,{" "}
                  <span className="text-[hsl(var(--code-keyword))]">'Kafka'</span>],{"\n"}
                  {"  "}
                  <span className="text-[hsl(var(--code-string))]">frontend</span>: [
                  <span className="text-[hsl(var(--code-keyword))]">'React.js'</span>,{" "}
                  <span className="text-[hsl(var(--code-keyword))]">'TypeScript'</span>, {"\n"}
                  {"             "}
                  <span className="text-[hsl(var(--code-keyword))]">'GraphQL'</span>,{" "}
                  <span className="text-[hsl(var(--code-keyword))]">'Tailwind CSS'</span>],{"\n"}
                  {"  "}
                  <span className="text-[hsl(var(--code-string))]">cloud</span>: [
                  <span className="text-[hsl(var(--code-keyword))]">'AWS'</span>,{" "}
                  <span className="text-[hsl(var(--code-keyword))]">'Azure'</span>,{" "}
                  <span className="text-[hsl(var(--code-keyword))]">'Docker'</span>, {"\n"}
                  {"          "}
                  <span className="text-[hsl(var(--code-keyword))]">'Kubernetes'</span>],{"\n"}
                  {"  "}
                  <span className="text-[hsl(var(--code-string))]">passionate</span>:{" "}
                  <span className="text-[hsl(var(--code-keyword))]">true</span>,{"\n"}
                  {"  "}
                  <span className="text-[hsl(var(--code-string))]">hireable</span>: () ={">"} {"{\n"}
                  {"    "}
                  <span className="text-[hsl(var(--code-keyword))]">return</span>{" "}
                  <span className="text-[hsl(var(--code-text))]">this</span>.passionate &&{" "}
                  {"\n"}
                  {"           "}
                  <span className="text-[hsl(var(--code-text))]">this</span>.experience &gt; <span className="text-[hsl(var(--code-keyword))]">'4 years'</span>;{"\n"}
                  {"  }"}
                  {"\n"};
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
