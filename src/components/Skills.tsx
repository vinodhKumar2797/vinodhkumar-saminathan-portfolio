import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "JPA/Hibernate", "MySQL", "PostgreSQL"],
      color: "primary"
    },
    {
      title: "Frontend",
      skills: ["React.js", "Redux Toolkit", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "secondary"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "Maven", "Gradle", "Postman", "Jenkins", "AWS"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            TECHNICAL EXPERTISE
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <Card
              key={category.title}
              className="p-6 sm:p-8 bg-card border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-[hsl(var(--skill-tag))] hover:bg-[hsl(var(--skill-tag-hover))] text-primary-foreground px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
