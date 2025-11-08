import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "DePaul University",
      position: "Research Assistant",
      duration: "Sep 2024 - Nov 2025",
      description: "Built a Java mining pipeline using Maven, JGit, RefactoringMiner, and Designite to auto-generate labeled datasets, reducing data-prep time by 60% and scaling to 200k+ rows. Trained Random Forest, XGBoost, and SVM models with k-fold CV, boosting macro-F1 by 12-18% over baselines.",
      technologies: ["Java", "Maven", "Apache Spark", "Weka", "Machine Learning", "ETL"]
    },
    {
      company: "Market Simplified",
      position: "Software Engineer",
      duration: "June 2022 - Aug 2023",
      description: "Built and maintained microservices with Spring Boot, Hibernate/JPA, and RESTful APIs. Integrated Kafka for real-time messaging, cutting latency by 30%. Deployed Dockerized services on Kubernetes and leveraged AWS (EKS/ECS, Lambda, EMR, DynamoDB) with Terraform. Improved observability with Datadog, ELK, and Istio.",
      technologies: ["Spring Boot", "Kafka", "Kubernetes", "AWS", "Docker", "Terraform", "Datadog", "ELK"]
    },
    {
      company: "Virtusa",
      position: "Software Engineer",
      duration: "June 2019 - June 2022",
      description: "Designed and built resilient Spring Boot services and REST/SOAP APIs. Established automated testing stack with Cucumber (BDD), Selenium WebDriver, and TestNG. Hardened CI/CD pipelines with Jenkins and Bamboo. Integrated JMS/Solace and tuned persistence with Hibernate/JPA against SQL Server, Oracle, and PostgreSQL.",
      technologies: ["Spring Boot", "REST/SOAP APIs", "Cucumber", "Selenium", "Jenkins", "Hibernate", "PostgreSQL"]
    },
    {
      company: "Virtusa",
      position: "Software Engineer Intern",
      duration: "Jan 2019 - June 2019",
      description: "Contributed to Spring MVC/Spring Boot microservices and REST/SOAP endpoints. Wrote unit/integration tests with JUnit, TestNG, and Mockito, improving coverage by 25%. Built ETL helpers and messaging POCs with JMS/Kafka and Apache Camel 3. Optimized SQL queries for Oracle/PostgreSQL.",
      technologies: ["Spring Boot", "JUnit", "Mockito", "Kafka", "Apache Camel", "Oracle"]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--section-bg))] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            CAREER PATH
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block z-10" />
                
                <Card className="ml-0 md:ml-20 p-8 bg-card border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 group">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                          <h4 className="text-xl font-semibold text-primary mt-1">
                            {exp.company}
                          </h4>
                        </div>
                        <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full border border-primary/20">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-foreground/80 mb-6 leading-relaxed text-base">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gradient-to-r from-muted to-muted/50 text-foreground text-sm rounded-lg font-medium hover:from-primary/10 hover:to-secondary/10 hover:scale-105 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
