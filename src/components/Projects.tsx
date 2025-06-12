
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Localink",
      subtitle: "Local Ecommerce and community building",
      period: "10/2023 - 03/2024",
      description: "Masters Course Project (15 ECTS) - A comprehensive platform for local businesses and community engagement.",
      technologies: ["Vue.js", "Flask", "Firebase Cloud Firestore"],
      type: "Masters Project"
    },
    {
      title: "WebShop",
      subtitle: "Crafting Digital Storefronts for Tomorrow's Success",
      period: "11/2023 - 12/2023",
      description: "Individual Course Project focusing on modern web technologies and e-commerce solutions.",
      technologies: ["Vue.js", "Django", "SQLite"],
      type: "Web Technologies"
    },
    {
      title: "ROOZGAR",
      subtitle: "On demand Handyman Services",
      period: "02/2021 - 01/2022",
      description: "Final Year Bachelors Project - Led team as Full-Stack Developer. Integrated AI/ML features including HuggingFace Deep Learning models with NLP for voice recognition and text processing.",
      technologies: ["React Native", "MERN Stack", "Firebase", "Flask", "AWS", "HuggingFace", "NLP"],
      type: "Final Year Project",
      award: "3rd Position - COMSATS Projects Expo"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-peach/50 transition-all duration-300 hover:glow-effect group">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-peach group-hover:text-peach/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">{project.subtitle}</p>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {project.award && (
                  <div className="mb-4">
                    <Badge className="bg-peach/10 text-peach border-peach/20 text-xs">
                      🏆 {project.award}
                    </Badge>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs border-muted-foreground/20 text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
