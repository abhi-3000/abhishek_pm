import React, { useState, useRef, useEffect } from 'react';
import { skillsData } from '../constants';
import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';
import { FiChevronDown } from "react-icons/fi";

const SkillCard = ({ group }) => {
  const [expanded, setExpanded] = useState(false);
  const [hiddenCount, setHiddenCount] = useState(0);
  const contentRef = useRef(null);

  const updateHiddenCount = () => {
    if (!contentRef.current) return;
    const children = contentRef.current.children;
    let count = 0;
    
    for (let i = 0; i < children.length; i++) {
      if (children[i].offsetTop > 120) {
        count++;
      }
    }
    setHiddenCount(count);
  };

  useEffect(() => {
    updateHiddenCount();
    window.addEventListener('resize', updateHiddenCount);
    return () => window.removeEventListener('resize', updateHiddenCount);
  }, [group.skills]);

  return (
    <>
      <style>{`
        .chevron-icon { transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
        .chevron-icon.rotated { transform: rotate(180deg); }

        .expand-btn {
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .expand-btn:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.9);
        }
      `}</style>

      <GlassCard className="p-8 flex flex-col h-full">
        <SectionSubheading title={group.category} />
        
        <div className="flex flex-col flex-1 relative mt-2">
          <div
            ref={contentRef}
            className={`flex flex-wrap gap-3 overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? 'max-h-[1000px]' : 'max-h-[138px]'
            }`}
          >
            {group.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-white/5 border border-white/10 text-white/80 px-4 py-2 rounded-[32px] text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {(hiddenCount > 0 || expanded) && (
            <div className="mt-auto pt-5">
              <button
                onClick={() => setExpanded(p => !p)}
                className="expand-btn flex items-center gap-2 px-4 py-2 rounded-xl border text-white text-xs font-normal tracking-wide uppercase self-start"
                style={{ borderColor: 'rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.03)' }}
              >
                <FiChevronDown
                  size={14}
                  className={`chevron-icon${expanded ? ' rotated' : ''}`}
                  style={{ color: 'rgba(210,120,90,0.7)' }}
                />
                {expanded
                  ? 'Show less'
                  : `+${hiddenCount} more skill${hiddenCount > 1 ? 's' : ''}`}
              </button>
            </div>
          )}
        </div>
      </GlassCard>
    </>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-3 md:px-12 max-w-7xl mx-auto">
      <SectionHeading title="Core Competencies" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-2 items-start">
        {skillsData.map((group, index) => (
          <SkillCard key={index} group={group} />
        ))}
      </div>
    </section>
  );
};

export default Skills;