import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../constants';
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-3 sm:px-6 md:px-12 max-w-7xl mx-auto">
     < SectionHeading title='Featured work'/>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        {projectsData.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col h-full rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-[21px] overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            <div 
              className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
              style={{
                background: `radial-gradient(circle at 100% 0%, ${proj.accent}50 0%, transparent 60%)`
              }}
            />

            <div className="relative z-10 flex flex-col flex-grow p-5 sm:p-8 md:p-10">
              <div className="mb-6">
                <h3 className='text-2xl sm:text-3xl font-medium tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/100 to-[#f9c5bbff]'>
      {proj.title}
    </h3>
                <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="bg-black/30 border border-white/5 rounded-[20px] p-4 sm:p-6 mb-8 flex-grow flex flex-col gap-4 sm:gap-5">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-normal text-white/40 uppercase tracking-widest mb-1.5 block">Problem</span>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{proj.problem}</p>
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-normal text-white/40 uppercase tracking-widest mb-1.5 block">Solution</span>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{proj.solution}</p>
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-normal text-white/40 uppercase tracking-widest mb-1.5 block">Impact</span>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{proj.impact}</p>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-6 sm:gap-8">
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] sm:text-xs font-medium text-white/70 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
           <div className="flex flex-col sm:flex-row gap-3 pt-5 sm:pt-6 border-t border-white/10">
  <a 
    href={proj.liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center gap-2 bg-white text-black font-semibold py-2 sm:py-2 px-2 rounded-full transition-all duration-300 active:scale-97 hover:bg-white/90 shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] text-sm sm:text-base 
    ${proj.isCaseStudy ? "flex-1" : "w-full"}`}
  >
    <span>Live Link</span>
    <FaExternalLinkAlt size={14} className="opacity-80" />
  </a>

  {proj.isCaseStudy && (
    <Link 
      to={proj.detailsLink}
      className="flex-1 flex items-center justify-center gap-2 bg-white/5 text-white font-semibold py-2 sm:py-2 px-2 rounded-full border border-white/10 transition-all duration-300 hover:bg-white/10 active:scale-97 text-sm sm:text-base group/btn"
    >
      <span>Case Study</span>
      <FaArrowRight size={14} className="opacity-80 group-hover/btn:translate-x-1 transition-transform duration-300" />
    </Link>
  )}
</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;