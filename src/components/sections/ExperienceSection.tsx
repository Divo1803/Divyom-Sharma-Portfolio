
import React, { useState, useRef, useEffect } from 'react';
import { CircleCheck, CircleDot } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Cloud Community Member",
    company: "Google Developer Groups - Amity University",
    period: "Feb 2025 - Present",
    description: "Actively participating in cloud technology communities, collaborating on projects, and contributing to knowledge sharing initiatives within the Google Developer ecosystem."
  },
  {
    id: 2,
    title: "Cloud Community Member",
    company: "Google Cloud Community India",
    period: "Feb 2025 - Present",
    description: "Engaging with the broader Google Cloud community across India, participating in events, and exploring cloud-based solutions for various technological challenges."
  },
  {
    id: 3,
    title: "Cryptic Head",
    company: "G3 - AFBBS Computer Club",
    period: "Jun 2022 - March 2024",
    description: "Led the cryptography and security division, organizing workshops and challenges to promote interest in cybersecurity among students. Facilitated hands-on learning experiences in encryption techniques and security protocols."
  },
  {
    id: 4,
    title: "Club Secretary",
    company: "Quiz Club, AFBBS",
    period: "Mar 2022 - March 2024",
    description: "Managed club operations, organized quizzing events, and coordinated with various stakeholders to create engaging intellectual activities for the student body."
  }
];

const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState<number>(1);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const scrollPosition = window.scrollY;
        const timeline = timelineRef.current;
        const experienceItems = timeline.querySelectorAll('[data-experience]');
        
        experienceItems.forEach((item) => {
          const id = parseInt(item.getAttribute('data-experience') || '1');
          const rect = item.getBoundingClientRect();
          
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveExperience(id);
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="experience" className="py-20 md:py-32 bg-black/40 relative">
      <div className="section-container">
        <h2 className="section-title neon-text">Experience</h2>
        
        <div className="max-w-4xl mx-auto mt-12 md:mt-20">
          <div className="relative" ref={timelineRef}>
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-neon-purple/40 via-neon-purple to-neon-purple/40" />
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                data-experience={exp.id}
                className={`flex flex-col md:flex-row md:items-center mb-16 last:mb-0 relative`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                  {activeExperience === exp.id ? (
                    <CircleCheck className="h-8 w-8 text-neon-purple animate-pulse-neon" />
                  ) : (
                    <CircleDot className="h-6 w-6 text-gray-500" />
                  )}
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 md:ml-auto'}`}>
                  <div 
                    className={`glass-effect rounded-xl p-6 border border-white/5 transition-all duration-500 ${
                      activeExperience === exp.id ? 'neon-border shadow-[0_0_15px_rgba(155,135,245,0.2)]' : ''
                    }`}
                  >
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-neon-purple/20 text-neon-purple mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-md text-gray-300 mb-4">{exp.company}</h4>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
