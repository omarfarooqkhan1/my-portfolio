
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "PHP", level: 70 }
      ]
    },
    {
      category: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "React Native", level: 80 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      category: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Django", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "Express.js", level: 88 }
      ]
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-peach/50 transition-colors">
                <h3 className="text-xl font-semibold text-peach mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
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

export default Skills;
