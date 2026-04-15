import React, { useEffect, useRef, useState } from 'react';
import { experienceData } from '../constants';
import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import SectionSubheading from './SectionSubheading';

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('exp--visible'); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const ExpCard = ({ exp, index }) => {
  const ref = useReveal();
  const [expanded, setExpanded] = useState(false);
  const extraContribs = exp.description.slice(2);
  const hasMore = extraContribs.length > 0;

  const collapseRef = useRef(null);
  const [collapseHeight, setCollapseHeight] = useState(0);

  useEffect(() => {
    if (!collapseRef.current) return;
    setCollapseHeight(expanded ? collapseRef.current.scrollHeight : 0);
  }, [expanded]);

  return (
    <>
      <style>{`
        .exp-card {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
          transition-delay: ${index * 0.12}s;
        }
        .exp--visible { opacity: 1 !important; transform: translateY(0) !important; }

        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(210,120,90,0.45); }
          50%       { box-shadow: 0 0 0 6px rgba(210,120,90,0); }
        }
        .timeline-dot { animation: dotPulse 3s ease-in-out infinite; }

        .exp-glass-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease, background 0.4s ease;
        }
        .exp-glass-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 48px 100px rgba(0,0,0,0.55);
          border-color: rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.065);
        }

        .tech-pill { transition: transform 0.2s ease; }
        .tech-pill:hover { transform: translateY(-2px); }

        .contrib-row {
          transition: background 0.25s ease, padding-left 0.25s ease;
          border-radius: 12px;
        }
        .contrib-row:hover {
          background: rgba(255,255,255,0.04);
          padding-left: 8px;
        }

        .logo-wrap { transition: border-color 0.3s ease, box-shadow 0.3s ease; }
        .exp-glass-card:hover .logo-wrap {
          border-color: rgba(210,120,90,0.35);
          box-shadow: 0 0 20px rgba(210,120,90,0.12);
        }

        .collapse-region {
          overflow: hidden;
          transition: height 0.42s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
          opacity: 0;
        }
        .collapse-region.open { opacity: 1; }

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

      <div ref={ref} className="exp-card relative flex gap-6 md:gap-10">

        
        <div className="hidden md:flex flex-col items-center pt-1.5 shrink-0">
          <div
            className="timeline-dot w-3 h-3 rounded-full shrink-0 mt-1"
            style={{ background: 'linear-gradient(135deg, rgba(210,120,90,0.9), rgba(90,52,44,0.7))' }}
          />
          <div
            className="flex-1 w-px mt-3"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)' }}
          />
        </div>

        
        <div className="flex-1">
          <GlassCard className="exp-glass-card">
            <div
              className="flex flex-col sm:flex-row justify-between items-start gap-5 mb-8 pb-7"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-4 md:gap-5">
                <div
                  className="logo-wrap w-14 h-14 md:w-16 md:h-16 rounded-2xl border overflow-hidden shrink-0 flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.45)', borderColor: 'rgba(255,255,255,0.10)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)' }}
                >
                  <img src={exp.logoUrl} alt={exp.company} className="w-full h-full object-cover opacity-90" />
                </div>
                <div>
                  {/* <h3 className="text-xl md:text-2xl font-bold text-white/95 tracking-tight leading-snug">{exp.role}</h3> */}
                  <SectionSubheading title={exp.role} />
                  <p className="text-lg text-white/80 font-medium tracking-wide">{exp.company}</p>
                </div>
              </div>

              <div
                className="flex flex-row sm:flex-col gap-2.5 sm:gap-2 shrink-0 self-start sm:self-auto px-4 py-3 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-2 text-white/70 text-s font-medium">
                  <FaCalendarAlt size={11} className="shrink-0" style={{ color: 'rgba(210,120,90,0.7)' }} />
                  <span>{exp.duration}</span>
                </div>
                <div className="hidden sm:block w-full" style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
                <div className="flex items-center gap-2 text-white/70 text-s font-normal">
                  <FaMapMarkerAlt size={11} className="shrink-0" style={{ color: 'rgba(210,120,90,0.7)' }} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col gap-9">

            
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: 'rgba(210,120,90,0.75)' }}>
                    Key Contributions
                  </span>
                  <div className="flex-1" style={{ height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
                </div>

              
                <ul className="flex flex-col gap-2.5">
                  {exp.description.slice(0, 2).map((point, i) => (
                    <li key={i} className="contrib-row flex items-start gap-3.5 py-2 px-0 md:px-2">
                      <span className="mt-2.5 shrink-0 w-[5px] h-[5px] rounded-full" style={{ background: 'rgba(210,120,90,0.55)' }} />
                      <span className="text-white/60 text-sm md:text-base leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

              
                {hasMore && (
                  <>
                    <div
                      ref={collapseRef}
                      className={`collapse-region${expanded ? ' open' : ''}`}
                      style={{ height: collapseHeight }}
                    >
                      <ul className="flex flex-col gap-2.5 pt-2.5">
                        {extraContribs.map((point, i) => (
                          <li key={i} className="contrib-row flex items-start gap-3.5 py-2 px-0 md:px-2">
                            <span className="mt-2.5 shrink-0 w-[5px] h-[5px] rounded-full" style={{ background: 'rgba(210,120,90,0.55)' }} />
                            <span className="text-white/60 text-sm md:text-base leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  
                    <button
                      onClick={() => setExpanded(p => !p)}
                      className="expand-btn mt-4 flex items-center gap-2 px-4 py-2 rounded-xl border text-white text-s font-normal tracking-wide uppercase"
                      style={{ borderColor: 'rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.03)' }}
                    >
                      <FiChevronDown
                        size={14}
                        className={`chevron-icon${expanded ? ' rotated' : ''}`}
                        style={{ color: 'rgba(210,120,90,0.7)' }}
                      />
                      {expanded
                        ? 'Show less'
                        : `+${extraContribs.length} more contribution${extraContribs.length > 1 ? 's' : ''}`}
                    </button>
                  </>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: 'rgba(210,120,90,0.75)' }}>
                    Technologies Used
                  </span>
                  <div className="flex-1" style={{ height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {exp.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="tech-pill flex items-center gap-2.5 px-4 py-2 rounded-2xl"
                      style={{ backgroundColor: tech.bg, border: `1px solid ${tech.color}28`, boxShadow: `0 4px 16px -4px ${tech.color}18` }}
                    >
                      <span className="text-base leading-none" style={{ color: tech.color }}>{tech.icon}</span>
                      <span className="text-xs font-semibold text-white/80 tracking-wide">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </GlassCard>
        </div>
      </div>
    </>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-3 md:px-12 max-w-7xl mx-auto">
      <SectionHeading title="Professional Experience" />
      <div className="flex flex-col gap-10 md:gap-12 mt-2">
        {experienceData.map((exp, index) => (
          <ExpCard key={exp.id} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;