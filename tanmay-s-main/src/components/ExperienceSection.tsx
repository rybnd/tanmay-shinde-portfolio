import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Wipro Technologies",
    location: "Pune, India",
    period: "May 2022 – Oct 2024",
    type: "Full-time",
    icon: "💼",
    color: "primary",
    achievements: [
      "Automated EA (Enterprise Architecture) processes using Ansible and Python, reducing manual effort by 75%",
      "Optimized HSBC's cloud infrastructure, improving system performance by 40%",
      "Implemented CI/CD pipelines using Jenkins and GitLab, reducing deployment time by 60%",
      "Led a team of 5 engineers in migrating legacy applications to AWS cloud infrastructure",
      "Developed monitoring dashboards using Grafana and Prometheus for real-time system insights"
    ],
    technologies: ["Python", "Ansible", "AWS", "Jenkins", "Docker", "Kubernetes", "GitLab", "Grafana"]
  },
  {
    title: "Software Development Intern",
    company: "Online Exam System Project",
    location: "Remote",
    period: "Oct 2021",
    type: "Internship",
    icon: "💻",
    color: "accent",
    achievements: [
      "Developed a comprehensive online examination platform using React and Node.js",
      "Implemented secure authentication and anti-cheating mechanisms",
      "Optimized database queries, improving response time by 35%",
      "Integrated real-time monitoring and automated result generation"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io", "JWT"]
  },
  {
    title: "Technical Intern",
    company: "Ordnance Factory",
    location: "Pune, India", 
    period: "2018 – 2022",
    type: "Part-time",
    icon: "🔧",
    color: "secondary",
    achievements: [
      "Conducted vulnerability assessments and penetration testing for critical systems",
      "Developed automated testing scripts reducing manual testing time by 50%",
      "Maintained and upgraded legacy systems while ensuring zero downtime",
      "Documented security protocols and best practices for the technical team"
    ],
    technologies: ["Python", "Shell Scripting", "Security Testing", "System Administration"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-text tracking-tight">EXPERIENCE</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
              Professional journey through innovative technology solutions
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-5 h-5 rounded-full bg-${exp.color} border-4 border-background z-10`}></div>

                  {/* Content */}
                  <div className="ml-20">
                    <Card className="glass glow-card card-hover transition-all duration-500">
                      <CardContent className="p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{exp.icon}</span>
                            <div>
                              <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                              <div className="flex items-center gap-2 text-primary font-medium">
                                <Building className="h-4 w-4" />
                                <span>{exp.company}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline">{exp.type}</Badge>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <span className="text-primary mt-1">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};