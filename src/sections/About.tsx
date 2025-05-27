import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section py-24">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-xl overflow-hidden card">
            <img 
              src="https://images.pexels.com/photos/32191677/pexels-photo-32191677.jpeg" 
              alt="Bene" 
              className="w-full h-full object-cover aspect-[3/4]"
            />
          </div>
        </div>
        
        {/* About Text */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-purple-400">
            I'm Myo Khant Kyaw
          </h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
           With over 3 months of experience in Coding Skills , UI UX Design, Database System and Creation Website in Magway Software House. I am confident in my ability to contribute to your team. In my previous role at Pandora Technology Company, I was Successfully Creation Website, Arduino uno project, IGCSE Computer Science O level, UI UX Design, Database System and Design Tools. I were competition Website System helps for People in Build Myanmar Hackathon. My expertise in Coding and Design Tools helped me create application.

          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          </p>
          
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-2">Email</h4>
              <p className="text-gray-400">myokhantkyaw.developer@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Location</h4>
              <p className="text-gray-400">Mandalay, Myanmar</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Study</h4>
              <p className="text-gray-400">Pandora </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Interests</h4>
              <p className="text-gray-400">Software Engineer</p>
            </div>
          </div>
          
          {/* Resume Button */}
          <a 
            href="#" 
            className="btn-primary inline-flex"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};