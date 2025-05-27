import React from 'react';

export const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML5', icon: '🔶', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: '🔷', color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'Git', icon: '🔀', color: 'from-orange-600 to-red-600' },
    { name: 'PHP', icon: '🐍', color: 'from-blue-500 to-purple-600' },
    { name: 'Java', icon: '☕', color: 'from-amber-600 to-red-700' },
  ];

  return (
    <section id="skills" className="section py-24 bg-gray-950">
      <h2 className="section-title">Skills</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 sm:gap-8">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className="skill-card animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`w-16 h-16 flex items-center justify-center text-4xl mb-4 rounded-full bg-gradient-to-br ${skill.color}`}>
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
          </div>
        ))}
      </div>
      
      {/* Additional Skills */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8 text-purple-400">Other Skills</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Skill Progress Bars */}
          {[
            { name: "UI/UX Design", percentage: 85 },
            { name: "Computer Science", percentage: 90 },
            { name: "Database Language", percentage: 75 },
            { name: "Software Design", percentage: 80 }
          ].map((skill, index) => (
            <div key={index} className="card p-6 animate-fade-in" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-white">{skill.name}</h4>
                <span className="text-purple-400">{skill.percentage}%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"
                  style={{ width: `${skill.percentage}%`, transition: "width 1.5s ease-in-out" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};