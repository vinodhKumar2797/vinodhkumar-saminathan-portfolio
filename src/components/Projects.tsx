import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "LinkedIn Profile ETL Pipeline",
      description: "Built incremental ETL for LinkedIn profiles & images with idempotent runs. Reduced full reloads by 70% and validation effort by 40%. Implemented efficient data processing with change detection and validation mechanisms.",
      technologies: ["Java", "ETL", "Data Processing", "Pipeline Architecture"],
      github: "https://github.com/vinodhKumar2797/ETL_PIPELINE",
      demo: "https://vinodhkumar2797.github.io/vinodhkumar-saminathan-etl-linkedprofiles-demo-website/"
    },
    {
      title: "E-Commerce Microservices Platform",
      description: "Applied SOLID principles with Singleton/Factory/Builder patterns to modularize authentication, catalog, and order services. Accelerated delivery by 25% and lifted test coverage to 65%. Implemented scalable microservices architecture.",
      technologies: ["Spring Boot", "Microservices", "Design Patterns", "JUnit"],
      github: "https://github.com/vinodhKumar2797/E-Commerce-Microservices-Platform",
      demo: "#"
    },
    {
      title: "Automated Testing Framework",
      description: "Established automated testing stack with Cucumber (BDD), Selenium WebDriver, and TestNG. Standardized Page Object patterns and created living documentation. Improved test coverage and reliability across microservices.",
      technologies: ["Cucumber", "Selenium", "TestNG", "BDD", "Test Automation"],
      github: "https://github.com/vinodhKumar2797/Automated-Testing-Framework",
      demo: "https://www.youtube.com/watch?v=JctRYXYFx7w"
    },
    {
      title: "Real-Time Event Processing System",
      description: "Integrated Kafka for real-time messaging across distributed systems. Implemented event-driven architecture that reduced latency by 30% and enabled seamless distributed communication with fault tolerance.",
      technologies: ["Kafka", "Spring Boot", "Event-Driven Architecture", "Distributed Systems"],
      github: "https://github.com/vinodhKumar2797/Real-Time-Event-Processing_Kafka",
      demo: "#"
    },
    {
      title: "Cloud-Native Application Deployment",
      description: "Deployed Dockerized microservices on Kubernetes with AWS infrastructure (EKS/ECS, Lambda, DynamoDB). Implemented Infrastructure as Code using Terraform and established CI/CD pipelines for automated deployments.",
      technologies: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
      github: "https://github.com/vinodhKumar2797/Cloud-Native-Application-Deployment",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            MY WORK
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="group relative p-8 bg-card/80 backdrop-blur-sm border-2 hover:border-primary/60 hover:shadow-2xl transition-all duration-500 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative space-y-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <p className="text-foreground/80 leading-relaxed text-sm min-h-[80px]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 min-h-[60px]">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-xs rounded-lg font-semibold border border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary font-semibold transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
