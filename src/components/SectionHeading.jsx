import React from 'react';

const SectionHeading = ({ title }) => {
  return (
    // <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
      <h2 className='text-3xl md:text-5xl font-thin tracking-tight mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-[#bc857bff]'>
      {title}
    </h2>
  );
};

export default SectionHeading;