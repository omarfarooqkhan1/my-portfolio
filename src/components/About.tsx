
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-semibold mb-4 text-peach">Profile</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Experienced Software Engineer proficient in developing full-stack applications with modern 
                  technologies like React, Node.js, Python, and Java. Demonstrated ability to build 
                  cross-platform mobile solutions using React Native, with a focus on delivering impactful results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently based in Turku, Finland, I'm eager to apply my skills in challenging Full-stack, 
                  Backend, Cloud, or DevOps roles while continuing to grow and learn in the ever-evolving 
                  tech landscape.
                </p>
              </Card>
            </div>
            
            <div className="animate-slide-in space-y-6">
              <Card className="p-6 bg-card border-border">
                <h4 className="text-lg font-semibold mb-3 text-peach">Education</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-foreground">MSc in Information Technology</h5>
                    <p className="text-sm text-muted-foreground">Åbo Akademi University, Finland</p>
                    <p className="text-sm text-muted-foreground">Aug 2023 – May 2025</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">BSc in Computer Science</h5>
                    <p className="text-sm text-muted-foreground">COMSATS University Islamabad</p>
                    <p className="text-sm text-muted-foreground">Feb 2018 – Jan 2022</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h4 className="text-lg font-semibold mb-3 text-peach">Key Achievements</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Reduced transaction costs by 70% with blockchain payment app</li>
                  <li>• Built healthcare app supporting 10,000+ users</li>
                  <li>• 3rd Position in Final Year Project competition</li>
                  <li>• Dean's List recognition for academic excellence</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
