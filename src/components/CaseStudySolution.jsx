import React from 'react';
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';
const CaseStudySolution = ({ solutionPoints, title }) => {
  const getAccentColor = (index) => {
    const colors = [
      '#F2E3D5',
      '#D9BBA0',
      '#BF9270',
      '#A67C52'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="relative py-8">
    <div className="mb-6 md:mb-8">
        <SectionHeading title={title} />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[calc(100%-80px)] w-0.5 bg-white/5 hidden md:block"></div>
        
        <div className="absolute top-[48px] bottom-[48px] left-4 w-0.5 bg-white/5 md:hidden"></div>

        {solutionPoints.map((point, index) => {
          const accentColor = getAccentColor(index);

          return (
            <div key={point.id} className={`group mr-3 md:mr-0 relative pl-12 sm:pl-14 md:pl-0 ${index % 2 !== 0 ? 'md:translate-y-16' : ''}` }>
              
              <div className={`absolute top-1/2 -translate-y-1/2 h-0.5 w-10 md:w-12 bg-white/10 ${index % 2 === 0 ? 'md:-right-12' : 'md:-left-12'} hidden md:block`}></div>

              <div
                className="absolute left-[11px] top-[48px] sm:top-[60px] -translate-y-1/2 w-3 h-3 rounded-full ring-4 ring-[#0f0f0f] md:hidden z-10"
                style={{ backgroundColor: accentColor }}
              ></div>

              <div className="bg-white/5 backdrop-blur-[21px] border border-white/10 rounded-[32px] p-4 sm:p-7 md:p-10 shadow-[0_28px_80px_rgba(0,0,0,0.22)] flex flex-col gap-4 sm:gap-5">
                
                <div className="flex items-end gap-4 sm:gap-5">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] bg-white/5 flex items-center justify-center text-xl sm:text-2xl shrink-0 group-hover:scale-105 transition-transform"
                    style={{ color: accentColor }}
                  >
                    {point.icon}
                  </div>
                  <SectionSubheading title={point.title}/>
                </div>
                
                <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed">
                  {point.description}
                </p>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudySolution;