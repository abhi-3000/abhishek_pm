import React from 'react';

const SectionSubheading = ({ title }) => {
  return (
      <h3 className='text-xl font-medium tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/100 to-[#f9c5bbff]'>
      {title}
    </h3>
  );
};

export default SectionSubheading;