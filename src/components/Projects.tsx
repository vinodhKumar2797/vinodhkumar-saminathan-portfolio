import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "LinkedIn Profile ETL Pipeline",
      description: "Built incremental ETL for LinkedIn profiles & images with idempotent runs. Reduced full reloads by 70% and validation effort by 40%. Implemented efficient data processing with change detection and validation mechanisms.",
      technologies: ["Java", "ETL", "Data Processing", "Pipeline Architecture"],
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Microservices Platform",
      description: "Applied SOLID principles with Singleton/Factory/Builder patterns to modularize authentication, catalog, and order services. Accelerated delivery by 25% and lifted test coverage to 65%. Implemented scalable microservices architecture.",
      technologies: ["Spring Boot", "Microservices", "Design Patterns", "JUnit"],
      github: "#",
      demo: "#"
    },
    {
      title: "High-Concurrency Search System",
      description: "Implemented high-concurrency client-server with parallel indexing and multi-term search using TF-IDF/BM25 algorithms. Sustained high QPS with low p95 latency. Shipped with reproducible scripts and comprehensive documentation.",
      technologies: ["Java", "Concurrent Programming", "Search Algorithms", "Performance Optimization"],
      github: "#",
      demo: "#"
    },
    {
      title: "Automated Testing Framework",
      description: "Established automated testing stack with Cucumber (BDD), Selenium WebDriver, and TestNG. Standardized Page Object patterns and created living documentation. Improved test coverage and reliability across microservices.",
      technologies: ["Cucumber", "Selenium", "TestNG", "BDD", "Test Automation"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-Time Event Processing System",
      description: "Integrated Kafka for real-time messaging across distributed systems. Implemented event-driven architecture that reduced latency by 30% and enabled seamless distributed communication with fault tolerance.",
      technologies: ["Kafka", "Spring Boot", "Event-Driven Architecture", "Distributed Systems"],
      github: "#",
      demo: "#"
    },
    {
      title: "Cloud-Native Application Deployment",
      description: "Deployed Dockerized microservices on Kubernetes with AWS infrastructure (EKS/ECS, Lambda, DynamoDB). Implemented Infrastructure as Code using Terraform and established CI/CD pipelines for automated deployments.",
      technologies: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
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
                <p className="text-foreground/80 leading-relaxed text-sm">
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
