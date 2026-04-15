import React from 'react';
import SectionHeading from './SectionHeading';
const CaseStudyImpact = ({ impactContent, title }) => {
  return (
    <div className="relative w-full ">
     <div className="mb-6 md:mb-8">
        <SectionHeading title={title} />
      </div>
    <div className="mx-3 md:mx-0">
      {/* <div className="bg-white/[0.01] backdrop-blur-[21px] border border-white/10 rounded-[24px] md:rounded-[32px] p-5 sm:p-8 md:p-12 shadow-[0_28px_80px_rgba(0,0,0,0.22)]"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {impactContent.map((metric, i) => (
            <div 
              key={i} 
              className="flex flex-col justify-start bg-white/5 rounded-[20px] p-6 sm:p-8 border border-white/5 group hover:bg-white/[0.07] hover:border-white/10 transition-all duration-300"
            >
              <span className="text-3xl md:text-4xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-[#D9BBA0] group-hover:scale-105 transition-transform inline-block origin-left mb-3 sm:mb-4">
                {metric.value}
              </span>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-medium">
                {metric.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyImpact;