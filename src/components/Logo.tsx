import React from 'react';
import { Sparkles } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center space-x-2">
      <div className="text-purple-500">
        <Sparkles size={28} />
      </div>
      <span className="font-bold text-xl text-white tracking-wide">MK</span>
    </a>
  );
};