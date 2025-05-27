import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Work: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'Personal Portfolio',
      category: 'web',
      image: 'https://i.postimg.cc/7hvvn4nQ/Screenshot-2025-05-22-002219.png',
      description: 'A responsive personal portfolio website built with React and Tailwind CSS.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://dainty-selkie-230010.netlify.app/',
      githubUrl: 'https://github.com/myokantkyaw'
    },
   
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="work" className="section py-24 bg-gray-950">
      <h2 className="section-title">My Work</h2>
      
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-12">
        <button 
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === 'all' 
              ? 'bg-purple-700 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('web')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === 'web' 
              ? 'bg-purple-700 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
        >
          Web
        </button>
        <button 
          onClick={() => setFilter('app')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === 'app' 
              ? 'bg-purple-700 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
        >
          App
        </button>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="card group overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay with links */}
              <div className="absolute inset-0 bg-purple-900/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href={project.liveUrl} 
                  className="w-12 h-12 rounded-full bg-white text-purple-700 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
                <a 
                  href={project.githubUrl} 
                  className="w-12 h-12 rounded-full bg-white text-purple-700 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-gray-800 text-purple-400 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};