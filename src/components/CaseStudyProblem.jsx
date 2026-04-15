import React from 'react';

const CaseStudyProblem = ({ problemContent }) => {
  return (
    <div className="relative w-full">
      <div className="mb-8 md:mb-12 px-6 md:px-0">
        <span className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3 pb-1 border-b border-white/5 inline-block">
          Challenge
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30 tracking-tight">
          The Problem
        </h2>
      </div>

      <div className="relative bg-white/[0.03] backdrop-blur-[21px] border border-white/10 rounded-[24px] md:rounded-[32px] p-6 px-2 sm:p-8 sm:px-2 md:p-12 shadow-[0_28px_80px_rgba(0,0,0,0.22)] overflow-hidden group mx-3 md:mx-0">
        
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-30"
          style={{ background: 'radial-gradient(circle at 0% 0%, #602d2dff 0%, transparent 50%)' }}
        />
        {/* <div className="absolute left-0 top-8 bottom-8 w-1 md:w-1.5 bg-gradient-to-b from-[#D9BBA0] to-transparent rounded-r-full opacity-80" /> */}

        <div className="relative z-10 pl-3 sm:pl-6 md:pl-8">
          <div className="absolute -top-6 -left-4 text-[50px] md:text-[120px] leading-none text-white/[0.03] font-serif font-bold pointer-events-none select-none">
            "
          </div>
          
          <p className="text-white/80 text-base sm:text-lg md:text-xl leading-loose md:leading-relaxed font-medium relative z-20">
            {problemContent}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default CaseStudyProblem;