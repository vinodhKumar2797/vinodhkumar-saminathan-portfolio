import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "DePaul University",
      location: "Chicago, Illinois",
      duration: "Sept 2023 - Nov 2025",
      description: "Specializing in Software Engineering, Machine Learning, and Distributed Systems. Working on research projects involving automated software analysis and machine learning applications in software engineering."
    },
    {
      degree: "Bachelor of Engineering in Electronics and Communication",
      institution: "Sri Eshwar College of Engineering",
      location: "Coimbatore, India",
      duration: "April 2015 - May 2019",
      description: "Built strong foundation in computer science fundamentals, data structures, algorithms, and software development. Active participation in coding clubs and technical societies."
    }
  ];

  const certifications = [
    "Docker Fundamentals Certification",
    "Oracle Certified Java Programmer (OCJP) - Java 8.0"
  ];

  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            ACADEMIC BACKGROUND
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Education
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-8 bg-card border-l-4 border-secondary hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-sm font-semibold text-secondary">
                      {edu.duration}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">{edu.location}</p>
                  <p className="text-foreground/80 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}

          {/* Certifications */}
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary to-secondary text-primary-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Certifications
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary-foreground/80 mt-1">•</span>
                      <span className="text-primary-foreground/90">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
