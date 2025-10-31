import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Company Name 1",
      position: "Full Stack Developer",
      duration: "2022 - Present",
      description: "Developed and maintained full-stack applications using Java Spring Boot for backend and React.js for frontend. Implemented Redux Toolkit for state management and optimized application performance.",
      technologies: ["Java", "Spring Boot", "React.js", "Redux", "PostgreSQL"]
    },
    {
      company: "Company Name 2",
      position: "Backend Developer",
      duration: "2020 - 2022",
      description: "Built scalable REST APIs using Spring Boot and Java. Worked on microservices architecture and integrated third-party services. Collaborated with frontend team for seamless integration.",
      technologies: ["Java", "Spring Boot", "MySQL", "Docker", "AWS"]
    },
    {
      company: "Company Name 3",
      position: "Junior Developer",
      duration: "2019 - 2020",
      description: "Started career as a junior developer working on both frontend and backend. Learned industry best practices and agile methodologies. Contributed to multiple projects and enhanced technical skills.",
      technologies: ["React.js", "Node.js", "MongoDB", "Git"]
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
