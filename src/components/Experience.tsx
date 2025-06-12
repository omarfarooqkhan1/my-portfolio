
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern & Thesis Worker",
      company: "Fingletek Oy",
      location: "Espoo, Finland",
      period: "Apr 2024 – Apr 2025",
      highlights: [
        "Developed a blockchain-based cross-border payment app, reducing transaction costs by 70%",
        "Designed and implemented smart contracts using Solidity for secure, real-time international transactions",
        "Built a mobile app using React Native, streamlining payment processing",
        "Developed full-stack features for the CAMARA API project using Vue.js and Django",
        "Created and integrated RESTful APIs using FastAPI and Django",
        "Managed cloud deployment on AWS and implemented containerization with Docker"
      ]
    },
    {
      title: "Software Developer",
      company: "Hiava Oy",
      location: "Espoo, Finland",
      period: "Apr 2024 – Oct 2024",
      highlights: [
        "Developed backend features for HiavaNet+ Portal using Node.js, improving performance and scalability",
        "Leveraged GitHub Copilot to accelerate development and reduce coding time",
        "Deployed microservices using Docker and orchestrated with Kubernetes on DigitalOcean"
      ]
    },
    {
      title: "Software Engineer",
      company: "Emumba",
      location: "San Jose, USA",
      period: "Feb 2022 – Jul 2023",
      highlights: [
        "Developed backend for Medwalla (healthcare app) supporting 10,000+ users with real-time features",
        "Integrated video calling and secure payment systems within the application",
        "Enhanced team productivity using GitHub Copilot and improved API testing/documentation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Work Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-peach/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-peach mb-1">{exp.title}</h3>
                    <p className="text-lg text-foreground font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="text-peach mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
