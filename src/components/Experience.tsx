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
    <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            CAREER PATH
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-8 bg-card border-l-4 border-primary hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {exp.position}
                    </h3>
                    <span className="text-sm font-semibold text-secondary">
                      {exp.duration}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
