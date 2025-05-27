import React from 'react';
import { Github, Facebook, Linkedin, Instagram } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Hi There,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700">
              I'm Myo Khant Kyaw
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            I Am Into <span className="text-purple-400 font-medium">Full Stack Developer</span>
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mb-10">
            <a href="https://github.com/myokantkyaw" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-all duration-300">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/myokhantkyawio/" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-all duration-300">
              <Linkedin size={22} />
            </a>
          </div>

          {/* CTA Button */}
          <a href="#work" className="btn-primary inline-flex">
            View My Work
          </a>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in delay-300">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 border-glow">
            <img 
              src="https://images.pexels.com/photos/32191677/pexels-photo-32191677.jpeg" 
              alt="Khen Gabriel" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};