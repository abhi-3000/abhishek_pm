import React from 'react';
import { personalData } from '../constants';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import SectionHeading from './SectionHeading';

const CTA = () => {
  return (
    <section id="contact" className="py-10 md:py-32 px-3 md:px-12 max-w-5xl mx-auto text-center">
      <SectionHeading title="Let's build something impactful."/>
      <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
        Currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
      </p>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6">
        
        <a 
          href={`mailto:${personalData.email}`} 
          className="group flex items-center gap-4 bg-white p-2 pr-6 md:pr-8 rounded-[32px] hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] w-full sm:w-auto"
        >
          <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <FaEnvelope className="text-black" size={18} />
          </div>
          <div className="text-left">
            <div className="text-[10px] sm:text-xs text-black/50 uppercase tracking-wider mb-0.5">
              Drop an Email
            </div>
            <div className="text-black font-semibold text-sm sm:text-base">
              {personalData.email}
            </div>
          </div>
        </a>

        <a 
          href={`tel:+91${personalData.phone}`} 
          className="group flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-[21px] p-2 pr-6 md:pr-8 rounded-[32px] hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
        >
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <FaPhoneAlt className="text-white/90" size={18} />
          </div>
          <div className="text-left">
            <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider mb-0.5">
              Give a Ring
            </div>
            <div className="text-white font-semibold text-sm sm:text-base">
              +91 {personalData.phone}
            </div>
          </div>
        </a>

        <a 
          href="http://www.linkedin.com/in/abhishek-mandal-274475271/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-[21px] p-2 pr-6 md:pr-8 rounded-[32px] hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
        >
          <div className="w-12 h-12 bg-[#0A66C2]/10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <FaLinkedin className="text-[#0A66C2]" size={20} />
          </div>
          <div className="text-left">
            <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider mb-0.5">
              Connect
            </div>
            <div className="text-white font-semibold text-sm sm:text-base">
              LinkedIn Profile
            </div>
          </div>
        </a>

      </div>
    </section>
  );
};

export default CTA;