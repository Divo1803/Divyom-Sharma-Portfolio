
import React from 'react';
import { Code, Database, Server, Terminal, Shield, Cpu, Figma, BarChart } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "MERN Stack",
    icon: <Code />,
    color: "from-blue-500 to-green-500"
  },
  {
    id: 2,
    name: "AVI Editing",
    icon: <Figma />,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Python",
    icon: <Terminal />,
    color: "from-yellow-500 to-blue-500"
  },
  {
    id: 4,
    name: "Data Science",
    icon: <BarChart />,
    color: "from-green-500 to-teal-500"
  },
  {
    id: 5,
    name: "Cybersecurity & Cryptography",
    icon: <Shield />,
    color: "from-red-500 to-orange-500"
  },
  {
    id: 6,
    name: "AI/ML",
    icon: <Cpu />,
    color: "from-teal-500 to-blue-500"
  },
  {
    id: 7,
    name: "SQL",
    icon: <Database />,
    color: "from-blue-500 to-purple-500"
  },
  {
    id: 8,
    name: "C/C++ Programming",
    icon: <Server />,
    color: "from-indigo-500 to-purple-500"
  }
];

const SkillCard: React.FC<{ skill: Skill, index: number }> = ({ skill, index }) => {
  return (
    <div 
      className="relative group"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animation: 'float 3s ease-in-out infinite'
      }}
    >
      <div className={`glass-effect rounded-xl p-6 border border-white/5 overflow-hidden transition-all duration-300 group-hover:border-neon-purple/50 group-hover:shadow-[0_0_20px_rgba(155,135,245,0.3)]`}>
        <div className="absolute -inset-1 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r blur-lg -z-10" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`, "--tw-gradient-stops": `var(--tw-gradient-${skill.color})` }}></div>
        
        <div className="flex flex-col items-center text-center">
          <div className={`h-14 w-14 rounded-full flex items-center justify-center bg-gradient-to-br ${skill.color} text-white p-3 mb-4`}>
            {skill.icon}
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-neon-purple transition-colors">{skill.name}</h3>
          
          <div className="w-full bg-gray-700/30 rounded-full h-1.5 mb-4">
            <div 
              className={`h-1.5 rounded-full bg-gradient-to-r ${skill.color} group-hover:animate-pulse`}
              style={{ width: `${85 + Math.random() * 15}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-black/60 relative">
      <div className="section-container">
        <h2 className="section-title neon-text">Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
