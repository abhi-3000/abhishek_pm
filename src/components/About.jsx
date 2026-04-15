import React, { useEffect, useRef } from 'react';
import { personalData } from '../constants';
import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('about--visible'); obs.disconnect(); }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const location  = personalData.location  ?? 'Gurugram, India';
const available = personalData.available ?? true;
const tagline   = personalData.tagline   ?? 'Building things that matter, one commit at a time.';

const About = () => {
  const ref = useReveal();

  return (
    <>
      <style>{`
        .about-wrap {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .about--visible { opacity: 1 !important; transform: translateY(0) !important; }

        .about-left {
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: 0.15s;
        }
        .about-right {
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: 0.32s;
        }
        .about--visible .about-left,
        .about--visible .about-right { opacity: 1; transform: translateY(0); }

        .about-card {
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .about-card:hover {
          border-color: rgba(255,255,255,0.15);
          box-shadow: 0 44px 100px rgba(0,0,0,0.48);
        }

        .col-divider {
          flex-shrink: 0;
          width: 1px;
          align-self: stretch;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(255,255,255,0.10) 20%,
            rgba(255,255,255,0.10) 80%,
            transparent 100%
          );
        }

        .row-divider {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255,255,255,0.10) 20%,
            rgba(255,255,255,0.10) 80%,
            transparent 100%
          );
        }

        @keyframes avail-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(100,210,130,0.5); }
          50%       { box-shadow: 0 0 0 2px rgba(100,210,130,0); }
        }
        .avail-dot { animation: avail-pulse 3.8s ease-in-out infinite; }
      `}</style>

      <section id="about" className="py-20 px-3 md:px-12 max-w-7xl mx-auto">
        <SectionHeading title="About Me" />

        <div ref={ref} className="about-wrap">
          <GlassCard className="about-card relative overflow-hidden">

            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(90,52,44,0.5) 0%, transparent 70%)',
                filter: 'blur(48px)',
              }}
            />

            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-0">

              <div className="about-left flex-[3] flex flex-col gap-5 lg:pr-10">
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: 'rgba(210,120,90,0.7)' }}
                >
                  Who I am
                </span>
                 <div className="flex flex-col gap-4">
                  {(typeof personalData.about === 'string'
                    ? personalData.about.split(/\n+/).filter(Boolean)
                    : [personalData.about]
                  ).map((para, i) => (
                    <p key={i} className="text-white/60 text-base md:text-lg leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <div className="col-divider hidden lg:block mx-2" />

              <div className="row-divider block lg:hidden" />

              <div className="about-right flex-[1.4] flex flex-col justify-center gap-8 lg:pl-10">

                <div className="flex flex-col gap-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.15em]"
                    style={{ color: 'rgba(210,120,90,0.65)' }}
                  >
                    Location
                  </span>
                  <div className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="rgba(255,255,255,0.35)"
                      />
                    </svg>
                    <span className="text-white/70 text-sm font-medium">{location}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.15em]"
                    style={{ color: 'rgba(210,120,90,0.65)' }}
                  >
                    Availability
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span
                      className="avail-dot w-2 h-2 rounded-full shrink-0"
                      style={{
                        background: available
                          ? 'rgba(100,210,130,0.85)'
                          : 'rgba(210,100,90,0.85)',
                      }}
                    />
                    <span className="text-white/70 text-sm font-medium">
                      {available ? 'Open to opportunities' : 'Not available right now'}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </GlassCard>
        </div>
      </section>
    </>
  );
};

export default About;