import React from 'react';

const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-[21px] border border-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.22)] rounded-[32px] p-6 md:p-10 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;