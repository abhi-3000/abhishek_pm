import React from 'react';
import { personalData } from '../constants';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-white/40 text-sm">© {new Date().getFullYear()} {personalData.name}. All Rights Reserved.</span>
        <div className="flex gap-6 text-sm text-white/60">
          
          <a href="https://github.com/abhi-3000" className="hover:text-white transition-colors">GitHub</a>
          <a href="http://www.linkedin.com/in/abhishek-mandal-274475271/" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/abhishek92030/" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;