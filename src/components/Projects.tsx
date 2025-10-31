import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with Spring Boot backend and React frontend. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["Spring Boot", "React.js", "Redux", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool built with microservices architecture. Real-time updates, team collaboration features, and project tracking capabilities.",
      technologies: ["Java", "Spring Boot", "React.js", "WebSocket", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with rich text editor, commenting system, and social features. RESTful API design with JWT authentication.",
      technologies: ["Spring Boot", "React.js", "Redux Toolkit", "MySQL"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            MY WORK
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
