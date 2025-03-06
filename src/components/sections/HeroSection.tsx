
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Linkedin, Mail, MapPin } from 'lucide-react';
import { useThree, Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

const Scene = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.z = 5;
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh>
          <torusGeometry args={[1.2, 0.4, 16, 100]} />
          <meshStandardMaterial 
            color="#9b87f5" 
            emissive="#9b87f5"
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
      </Float>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1.5} />
    </>
  );
};

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / (innerWidth / 2) * -15;
      const moveY = (clientY - innerHeight / 2) / (innerHeight / 2) * -15;
      
      heroRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm sm:text-base text-neon-purple mb-3 font-mono">Hello, I'm</p>
            <h1 
              ref={heroRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-transform duration-300 ease-out text-white"
            >
              Divyom <span className="neon-text">Sharma</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-light text-gray-300 max-w-xl mx-auto md:mx-0">
              Aspiring Technologist | Web Dev | Cybersecurity | Data Science
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-6 mt-8">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-neon-purple" />
                <span>Delhi, India</span>
              </div>
              <a 
                href="mailto:divyomsharma180307@gmail.com" 
                className="flex items-center text-gray-300 hover:text-neon-purple transition-colors"
              >
                <Mail className="h-4 w-4 mr-2 text-neon-purple" />
                <span>divyomsharma180307@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/divyomsharma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-neon-purple transition-colors"
              >
                <Linkedin className="h-4 w-4 mr-2 text-neon-purple" />
                <span>divyomsharma</span>
              </a>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-md bg-neon-purple hover:bg-neon-purple/90 text-white font-medium transition-colors duration-300"
              >
                Get in Touch
              </a>
              <a 
                href="#about" 
                className="px-8 py-3 rounded-md neon-border text-white hover:bg-neon-purple/10 transition-all duration-300"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white hover:text-neon-purple transition-colors">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
