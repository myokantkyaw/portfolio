import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend or email service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section py-24 bg-gray-950">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold text-purple-400 mb-6">
            Get In Touch
          </h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Have a project in mind or want to chat about web development? 
            Feel free to reach out! I'm always open to discussing new opportunities and ideas.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
                <Mail className="text-purple-400" size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <p className="text-gray-400">myokhantkyaw.developer@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
                <Phone className="text-purple-400" size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Phone</h4>
                <p className="text-gray-400">+95 9 456 426 944</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
                <MapPin className="text-purple-400" size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Location</h4>
                <p className="text-gray-400">Mandalay, Myanmar</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="card p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="Subject"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center"
            >
              <Send size={18} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};