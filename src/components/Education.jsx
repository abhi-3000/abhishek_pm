import React from 'react';
import { educationData } from '../constants';
import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';

const Education = () => {
  return (
    <section id="education" className="py-20 px-3 md:px-12 max-w-7xl mx-auto">
      <SectionHeading title="Education" />
      <div className="flex flex-col gap-6">
        {educationData.map((edu) => (
          <GlassCard key={edu.id}>
            <SectionSubheading title={edu.institution}/>
            <div className="flex justify-between items-center mt-2 mb-4">
              <span className="text-white/60">{edu.degree}</span>
              <span className="text-sm text-white/40">{edu.duration}</span>
            </div>
            {/* <p className="text-white/70 text-sm">{edu.details}</p> */}
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Education;