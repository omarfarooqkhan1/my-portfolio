
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative code-bg">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Muhammad Omar</span>
            <br />
            <span className="text-foreground">Farooq Khan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Software Engineer crafting full-stack applications with modern technologies. 
            Passionate about React, Node.js, Python, and delivering impactful solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-peach hover:bg-peach/90 text-background font-semibold px-8 py-3 glow-effect"
            >
              Get In Touch
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline" 
              className="border-peach text-peach hover:bg-peach/10 px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection('about')} className="text-peach hover:text-peach/80 transition-colors">
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
