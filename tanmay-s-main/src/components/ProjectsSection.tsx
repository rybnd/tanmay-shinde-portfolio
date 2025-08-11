import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    title: "Ansible Web Stack Automation",
    description: "Comprehensive automation solution for deploying and managing LAMP/LEMP stack environments with configuration management and monitoring.",
    image: "🚀",
    technologies: ["Ansible", "Python", "AWS", "Linux", "Apache", "MySQL", "Monitoring"],
    outcomes: [
      "Reduced deployment time by 85%",
      "Achieved 99.9% infrastructure uptime", 
      "Automated 50+ server configurations"
    ],
    type: "DevOps",
    color: "primary"
  },
  {
    title: "Forex Market Predictor",
    description: "Machine learning-powered application for predicting foreign exchange market trends using real-time data analysis and historical patterns.",
    image: "📈",
    technologies: ["Python", "Scikit-learn", "Pandas", "React", "Chart.js", "API Integration"],
    outcomes: [
      "85% prediction accuracy achieved",
      "Real-time data processing",
      "Interactive visualization dashboard"
    ],
    type: "Data Science",
    color: "accent"
  },
  {
    title: "Festival Impact Analyzer",
    description: "Data analytics platform analyzing the economic and social impact of cultural festivals using crowd-sourced data and social media sentiment.",
    image: "🎭",
    technologies: ["Tableau", "Python", "NLP", "Social Media APIs", "Statistical Analysis"],
    outcomes: [
      "Analyzed 10M+ social media posts",
      "Generated actionable insights for 25+ festivals",
      "Created interactive public dashboards"
    ],
    type: "Analytics",
    color: "primary"
  },
  {
    title: "Online Exam Portal",
    description: "Secure, scalable examination platform with anti-cheating mechanisms, real-time monitoring, and automated evaluation system.",
    image: "📝",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "Webcam Integration"],
    outcomes: [
      "Served 5000+ concurrent users",
      "Implemented advanced proctoring",
      "Zero security incidents reported"
    ],
    type: "Full-Stack",
    color: "accent"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-text tracking-tight">SELECTED WORKS</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto">
              Showcasing innovative solutions across DevOps automation, data analytics, and full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass hover:glow-card transition-all duration-500 card-hover group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{project.image}</span>
                      <div>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <Badge 
                          variant={project.color === 'primary' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Results</h4>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">▸</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button variant="neon" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => {
                const element = document.querySelector('#projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};