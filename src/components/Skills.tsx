import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Languages",
      skills: [
        { name: "Java", level: 95 },
        { name: "Spring Boot", level: 92 },
        { name: "Hibernate/JPA", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "C++", level: 75 },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 92 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "GraphQL", level: 82 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Oracle", level: 82 },
        { name: "Redis", level: 80 },
        { name: "DynamoDB", level: 78 },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 85 },
        { name: "Jenkins", level: 82 },
        { name: "Terraform", level: 80 },
        { name: "Azure", level: 75 },
      ]
    },
    {
      title: "Testing & Tools",
      skills: [
        { name: "JUnit", level: 92 },
        { name: "Selenium", level: 88 },
        { name: "Mockito", level: 90 },
        { name: "Git", level: 95 },
        { name: "Maven", level: 85 },
        { name: "Cucumber", level: 82 },
      ]
    }
  ];

  const CircularProgress = ({ level, name }: { level: number; name: string }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (level / 100) * circumference;

    return (
      <div className="flex flex-col items-center group">
        <div className="relative w-28 h-28">
          <svg className="transform -rotate-90 w-28 h-28">
            {/* Background circle */}
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke="hsl(var(--muted))"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke="hsl(var(--primary))"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
              style={{
                filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.5))"
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-foreground group-hover:scale-110 transition-transform">
              {level}%
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm font-semibold text-foreground text-center group-hover:text-primary transition-colors">
          {name}
        </p>
      </div>
    );
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            TECHNICAL EXPERTISE
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Skills & Proficiency
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <Card className="p-8 sm:p-10 bg-card border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skill.name}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${(idx * 0.15) + (skillIdx * 0.05)}s` }}
                    >
                      <CircularProgress level={skill.level} name={skill.name} />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
