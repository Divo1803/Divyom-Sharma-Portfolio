
import React, { useState } from 'react';
import { PencilRuler, Award, Building, School } from 'lucide-react';

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const educations: Education[] = [
  {
    id: 1,
    institution: "Indian Institute of Technology, Madras",
    degree: "BS",
    period: "May 2024 - May 2028",
    description: "Pursuing a rigorous curriculum in core computer science principles, focusing on advanced algorithms, system design, and computational theory.",
    icon: <Building className="h-10 w-10" />
  },
  {
    id: 2,
    institution: "HarvardX CS50, Harvard University",
    degree: "Computer Science",
    period: "2023 - 2024",
    description: "Completed Harvard's renowned introduction to computer science, covering topics from C programming to web development and database design.",
    icon: <Award className="h-10 w-10" />
  },
  {
    id: 3,
    institution: "Amity University, Noida",
    degree: "BTech",
    period: "Aug 2024 - April 2028",
    description: "Studying computer science engineering with specialization in cybersecurity, focusing on network security, cryptography, and ethical hacking.",
    icon: <PencilRuler className="h-10 w-10" />
  },
  {
    id: 4,
    institution: "Air Force Bal Bharati School",
    degree: "CBSE",
    period: "Aug 2012 - March 2024",
    description: "Completed secondary education with distinction in mathematics and computer sciences, participating in numerous technology-oriented extracurricular activities.",
    icon: <School className="h-10 w-10" />
  }
];

const EducationCard: React.FC<{ education: Education }> = ({ education }) => {
  const [flipped, setFlipped] = useState(false);
  
  return (
    <div 
      className="h-64 perspective-1000 w-full cursor-pointer" 
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute inset-0 glass-effect rounded-xl p-6 flex flex-col items-center justify-center text-center backface-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
          <div className="text-neon-purple mb-4">
            {education.icon}
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{education.institution}</h3>
          <p className="text-sm text-gray-300">{education.degree}</p>
          <p className="text-xs text-neon-purple mt-2">{education.period}</p>
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 glass-effect rounded-xl p-6 flex flex-col justify-center backface-hidden rotate-y-180 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
          <h3 className="text-lg font-bold text-white mb-4">{education.institution}</h3>
          <p className="text-sm text-gray-300">{education.description}</p>
        </div>
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <h2 className="section-title neon-text">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {educations.map(education => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
