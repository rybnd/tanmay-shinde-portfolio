import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, GraduationCap, Calendar, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-text tracking-tight">ABOUT ME</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
              Discover the professional journey of a passionate DevOps engineer
            </p>
          </div>

          {/* Bio */}
          <div className="mb-20">
            <Card className="glass glow-card card-hover">
              <CardContent className="p-10">
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="text-lg leading-relaxed mb-6">
                    I am a passionate DevOps Engineer and Full-Stack Developer with expertise in cloud infrastructure, 
                    automation, and data analytics. Currently pursuing my Master's in Information Technology at 
                    Worcester Polytechnic Institute, I bring real-world experience from my role at Wipro Technologies.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    My journey in technology has been driven by a desire to optimize systems and create elegant solutions 
                    to complex problems. I specialize in building scalable cloud architectures, implementing CI/CD pipelines, 
                    and developing full-stack applications that make a meaningful impact.
                  </p>
                  <p className="text-lg leading-relaxed">
                    When I'm not coding or automating infrastructure, you'll find me exploring the latest in AI/ML, 
                    contributing to open-source projects, or mentoring fellow developers in their tech journey.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
            <div className="space-y-6">
              <Card className="glass hover:glow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Master of Science in Information Technology</h4>
                      <p className="text-primary font-medium mb-2">Worcester Polytechnic Institute</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Expected Dec 2026</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Worcester, MA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass hover:glow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/20">
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Bachelor of Science in Mechanical Engineering</h4>
                      <p className="text-accent font-medium mb-2">Savitribai Phule Pune University</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>May 2022</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Pune, India</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">AI & Machine Learning Specialization</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass text-center hover:glow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                      <span className="text-2xl">🚀</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Agile Leadership</h4>
                  <p className="text-sm text-muted-foreground">
                    Leading cross-functional teams with agile methodologies and scrum practices
                  </p>
                </CardContent>
              </Card>

              <Card className="glass text-center hover:glow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                      <span className="text-2xl">💡</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">
                    Analytical thinking and creative solutions for complex technical challenges
                  </p>
                </CardContent>
              </Card>

              <Card className="glass text-center hover:glow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                      <span className="text-2xl">🤝</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Communication</h4>
                  <p className="text-sm text-muted-foreground">
                    Effective collaboration and clear technical communication across teams
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Download Resume */}
          <div className="text-center">
            <Button variant="hero" size="lg" className="group">
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};