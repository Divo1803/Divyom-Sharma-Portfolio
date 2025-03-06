
import React, { useEffect, useRef } from 'react';
import { useInView } from '@react-three/drei';
import gsap from 'gsap';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      if (scrollPosition > sectionTop - viewportHeight + 100 && 
          scrollPosition < sectionTop + sectionHeight) {
        const scrollPercentage = (scrollPosition - (sectionTop - viewportHeight + 100)) / 
                                 (sectionHeight + viewportHeight - 100);
        
        const translateY = scrollPercentage * 50; // Adjust for desired parallax effect
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(-${translateY}px)`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.querySelectorAll('.animate-item'), 
        { 
          y: 100, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <h2 className="section-title neon-text animate-item">About Me</h2>
        
        <div 
          ref={contentRef} 
          className="max-w-4xl mx-auto mt-12 relative"
        >
          <div className="glass-effect rounded-xl p-8 md:p-12 animate-item">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white animate-item">Who am I?</h3>
                <p className="text-gray-300 leading-relaxed mb-6 animate-item">
                  An aspiring technologist specializing in web development, cybersecurity, and data science, 
                  keen on solving complex problems and contributing to innovative tech initiatives.
                </p>
                <p className="text-gray-300 leading-relaxed animate-item">
                  With a passion for cutting-edge technologies and a focus on creating secure, 
                  efficient solutions, I aim to make a meaningful impact in the tech world.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect rounded-lg p-6 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] transition-all duration-300 animate-item">
                  <h4 className="text-lg font-semibold mb-2 text-neon-purple">Web Dev</h4>
                  <p className="text-sm text-gray-400">
                    Building responsive and interactive web applications with modern frameworks and tools.
                  </p>
                </div>
                
                <div className="glass-effect rounded-lg p-6 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] transition-all duration-300 animate-item">
                  <h4 className="text-lg font-semibold mb-2 text-neon-purple">Cybersecurity</h4>
                  <p className="text-sm text-gray-400">
                    Implementing secure practices and exploring vulnerability assessment techniques.
                  </p>
                </div>
                
                <div className="glass-effect rounded-lg p-6 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] transition-all duration-300 animate-item">
                  <h4 className="text-lg font-semibold mb-2 text-neon-purple">Data Science</h4>
                  <p className="text-sm text-gray-400">
                    Analyzing and interpreting complex data sets to extract meaningful insights.
                  </p>
                </div>
                
                <div className="glass-effect rounded-lg p-6 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] transition-all duration-300 animate-item">
                  <h4 className="text-lg font-semibold mb-2 text-neon-purple">Problem Solving</h4>
                  <p className="text-sm text-gray-400">
                    Tackling complex challenges with analytical thinking and creative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
