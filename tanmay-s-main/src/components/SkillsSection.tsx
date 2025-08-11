import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Code, Database, Monitor, Palette, Users } from "lucide-react";

const skillCategories = [
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "text-primary",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Ansible", "Terraform", "Jenkins", "GitLab CI/CD", "Grafana", "Prometheus"]
  },
  {
    title: "Programming",
    icon: Code,
    color: "text-accent",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "Shell Scripting", "Go", "C++", "PowerShell"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-primary",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ElasticSearch", "DynamoDB", "SQLite"]
  },
  {
    title: "Frontend",
    icon: Monitor,
    color: "text-accent",
    skills: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Material-UI", "Responsive Design"]
  },
  {
    title: "Data & Analytics",
    icon: Palette,
    color: "text-primary",
    skills: ["Tableau", "Power BI", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Apache Spark", "ETL Pipelines"]
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "text-accent",
    skills: ["Agile Leadership", "Project Management", "Technical Communication", "Team Collaboration", "Problem Solving", "Mentoring"]
  }
];

const services = [
  {
    title: "DevOps & Cloud Automation",
    description: "End-to-end cloud infrastructure setup, CI/CD pipeline implementation, and automated deployment solutions.",
    features: ["Infrastructure as Code", "Container Orchestration", "Monitoring & Logging", "Security Best Practices"],
    icon: "☁️"
  },
  {
    title: "Full-Stack Development",
    description: "Modern web applications with scalable backend APIs and responsive frontend interfaces.",
    features: ["React/Next.js Apps", "RESTful APIs", "Database Design", "Performance Optimization"],
    icon: "💻"
  },
  {
    title: "Data Analytics & Visualization",
    description: "Transform your data into actionable insights with interactive dashboards and comprehensive analysis.",
    features: ["Interactive Dashboards", "Data Pipeline Design", "Predictive Analytics", "Business Intelligence"],
    icon: "📊"
  },
  {
    title: "UI/UX Enhancements",
    description: "Improve user experience with modern design principles and accessibility best practices.",
    features: ["Responsive Design", "Accessibility Compliance", "Performance Optimization", "User Research"],
    icon: "🎨"
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 section-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-text tracking-tight">SKILLS & SERVICES</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
              Comprehensive expertise across modern development and operations
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="glass hover:glow-card transition-all duration-500 card-hover">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3">
                        <IconComponent className={`h-7 w-7 ${category.color}`} />
                        <span className="text-xl font-bold">{category.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Services I Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="glass hover:glow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{service.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <div className="space-y-2">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <span className="text-primary">✓</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};