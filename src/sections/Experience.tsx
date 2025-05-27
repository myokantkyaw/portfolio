import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      position: 'Full Stack Developer',
      company: 'Future Technology Inc.',
      period: 'Jan 2025 - Present',
      location: 'Remote',
      description: 'Working on developing responsive and interactive user interfaces using React and Tailwind CSS. Contributing to the development of company websites and web applications.',
      responsibilities: [
        'Building reusable UI components using React and Tailwind CSS',
        'Implementing responsive designs that work across all devices',
        'Collaborating with senior developers on project requirements',
        'Participating in code reviews and improving codebase quality'
      ]
    },
    {
      position: 'Volunteer',
      company: 'The Explorers MM',
      period: 'Jun 2025',
      location: 'Remote',
      description: 'UI UX Design and Event System Management',
      responsibilities: [
        'Creating Event',
        'Implementing responsive designs and modern UI/UX practices',
        'Managing client communications ',
        'Providing maintenance and updates for existing websites'
      ]
    },
    {
      position: 'Junior Web Developer',
      company: 'Magway Software House',
      period: 'Jun 2024 - Dec 2024',
      location: 'Magway ,Myanmar',
      description: 'Website Design , UI UX Design, DataBase System and Company Web Application',
      responsibilities: [
        'Creating custom Design',
        'Implementing responsive designs and modern UI/UX practices',
        'Managing client communications and project timelines',
        'Providing maintenance and updates for existing websites'
      ]
    },
    
  ];

  return (
    <section id="experience" className="section py-24">
      <h2 className="section-title">Experience</h2>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform -translate-x-1/2"></div>
        
        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-purple-600 border-4 border-gray-900 transform -translate-x-1/2"></div>
              
              {/* Date */}
              <div className="md:w-1/2 text-center md:text-right md:pr-10 flex flex-col items-center md:items-end">
                <div className="card p-4 inline-block mb-4">
                  <div className="flex items-center text-purple-400">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="md:w-1/2 md:pl-10">
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-purple-400 mb-1">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg text-white mb-3">
                    {exp.company}
                  </h4>
                  
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <h5 className="text-white font-semibold mb-2">Responsibilities:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-400">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};