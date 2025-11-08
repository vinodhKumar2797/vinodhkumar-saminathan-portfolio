import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Languages",
      skills: ["Java", "Spring Boot", "Hibernate/JPA", "Node.js", "Python", "C++", "Kafka", "Microservices", "REST APIs", "SOAP"],
      color: "primary"
    },
    {
      title: "Frontend",
      skills: ["React.js", "TypeScript", "JavaScript", "GraphQL", "HTML5", "CSS3", "Tailwind CSS", "jQuery"],
      color: "secondary"
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "Redis", "DynamoDB", "PL/SQL"],
      color: "accent"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Terraform", "CI/CD", "ELK Stack", "Datadog"],
      color: "primary"
    },
    {
      title: "Testing & Tools",
      skills: ["JUnit", "TestNG", "Mockito", "Cucumber", "Selenium", "Git", "Maven", "Postman"],
      color: "secondary"
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%),radial-gradient(circle_at_70%_50%,hsl(var(--secondary)/0.1),transparent_50%)]" />
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            TECHNICAL EXPERTISE
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <Card
              key={category.title}
              className="group relative p-8 bg-card/80 backdrop-blur-sm border-2 hover:border-primary/60 hover:shadow-2xl transition-all duration-500 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-secondary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIdx) => (
                    <Badge
                      key={skill}
                      className="bg-gradient-to-r from-[hsl(var(--skill-tag))] to-[hsl(var(--skill-tag))]/80 hover:from-[hsl(var(--skill-tag-hover))] hover:to-[hsl(var(--skill-tag-hover))]/80 text-primary-foreground px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 cursor-default shadow-sm hover:shadow-md border border-primary/20"
                      style={{ animationDelay: `${(idx * 0.1) + (skillIdx * 0.03)}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
