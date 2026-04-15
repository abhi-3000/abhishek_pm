import React from 'react';
import SectionHeading from './SectionHeading';
const CaseStudyTextSection = ({ number, title, content, listItems, conclusion }) => {
  return (
    <div className="relative w-full py-6">
      <div className="mb-6 md:mb-8">
        <SectionHeading title={title} />
      </div>

      <div className="text-white/70 text-base md:text-lg leading-relaxed flex flex-col gap-6">
        {content && <p>{content}</p>}
        
        {listItems && listItems.length > 0 && (
          <ul className="flex flex-col gap-4">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4 bg-white/[0.02] p-5 rounded-[20px] border border-white/5">
                <span className="mt-2 shrink-0 w-[6px] h-[6px] rounded-full bg-[#D9BBA0]" />
                <div>
                  <strong className="text-white/90 block mb-1">{item.title}</strong>
                  <span className="text-white/60">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {conclusion && <p className="mt-2 text-white/90 font-medium">{conclusion}</p>}
      </div>
    </div>
  );
};

export default CaseStudyTextSection;