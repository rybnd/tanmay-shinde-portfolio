import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const techStack = [
  "AWS", "Python", "Ansible", "React", "Docker", "Kubernetes", 
  "SQL", "Tableau", "Jenkins", "Terraform", "Node.js", "MongoDB"
];

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Matrix rain effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="matrix-rain-enhanced text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Hero Text - Inspired by reference */}
          <div className="mb-12 mt-20 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <h1 className="hero-title mb-4">
                <span className="block text-foreground/90">HI!!!!!!  THERE</span>
                <span className="block text-foreground/90">I'M TANMAY</span>
                <span className="block gradient-text">DEVOPS</span>
                <span className="block text-foreground/90">ENGINEER</span>
              </h1>
            </div>
            <h2 className="text-xl md:text-3xl text-muted-foreground mb-8 font-light tracking-wide">
              Cloud & Automation Specialist | Full-Stack Developer
            </h2>
            <p className="text-lg md:text-2xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
              "Optimizing systems. Automating solutions. Engineering the future."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToAbout}
              className="group text-lg px-12 py-6"
            >
              View Portfolio
              <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="neon" 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-12 py-6"
            >
              Get in Touch
              <Mail className="ml-3 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="mb-16 flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="glass" size="icon" className="w-14 h-14" asChild>
              <a href="mailto:0943tanmay3490@gmail.com" className="hover:scale-125 transition-transform">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="glass" size="icon" className="w-14 h-14" asChild>
              <a href="https://linkedin.com/in/tanmayshinde45" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="glass" size="icon" className="w-14 h-14" asChild>
              <a href="https://github.com/rybnd" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                <Github className="h-6 w-6" />
              </a>
            </Button>
          </div>

          {/* Tech Stack Carousel */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {techStack.map((tech, index) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default text-sm px-4 py-2"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};