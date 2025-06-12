
import { useState, useEffect } from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gradient">
            Omar Khan
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-peach transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-muted-foreground hover:text-peach transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-peach transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-peach transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-peach transition-colors">
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/omarfarooqkhan1" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-peach transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/m-omarfarooqkhan1" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-peach transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:omar.khan@abo.fi"
               className="text-muted-foreground hover:text-peach transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={20} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-muted-foreground hover:text-peach transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-left text-muted-foreground hover:text-peach transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-muted-foreground hover:text-peach transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-muted-foreground hover:text-peach transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-muted-foreground hover:text-peach transition-colors">
                Contact
              </button>
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/omarfarooqkhan1" target="_blank" rel="noopener noreferrer" 
                   className="text-muted-foreground hover:text-peach transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/m-omarfarooqkhan1" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-peach transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:omar.khan@abo.fi"
                   className="text-muted-foreground hover:text-peach transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
