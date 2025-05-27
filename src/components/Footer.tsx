import React from 'react';
import { Github, Facebook, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Myo Khant Kyaw. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/myokantkyaw" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/myokhantkyawio/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};