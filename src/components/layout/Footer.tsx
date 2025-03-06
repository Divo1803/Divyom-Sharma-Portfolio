
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <a href="#home" className="text-sm font-medium text-white hover:text-neon-purple transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-white hover:text-neon-purple transition-colors">About</a>
            <a href="#experience" className="text-sm font-medium text-white hover:text-neon-purple transition-colors">Experience</a>
            <a href="#education" className="text-sm font-medium text-white hover:text-neon-purple transition-colors">Education</a>
            <a href="#skills" className="text-sm font-medium text-white hover:text-neon-purple transition-colors">Skills</a>
            <a href="#contact" className="text-sm font-medium text-white hover:text-neon-purple transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-purple transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/divyomsharma" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-purple transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:divyomsharma180307@gmail.com" className="text-white hover:text-neon-purple transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-purple transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Divyom Sharma. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Built with React, Three.js, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
