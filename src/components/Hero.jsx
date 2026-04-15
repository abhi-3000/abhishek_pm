import React, { useEffect, useRef } from 'react';
import myImage1 from "../assets/abhi1.png";
import { personalData } from '../constants';
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.classList.add('hero--visible');
    });
  }, []);

  return (
    <>
      <style>{`
        .hero-root {
          opacity: 0;
          transition: opacity 0.8s ease;
        }
        .hero--visible {
          opacity: 1;
        }

        .hero-text-block {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .hero--visible .hero-text-block { opacity: 1; transform: translateY(0); }

        .hero-name      { transition-delay: 0.15s; }
        .hero-role      { transition-delay: 0.28s; }
        .hero-intro     { transition-delay: 0.40s; }
        .hero-divider   { transition-delay: 0.48s; }
        .hero-btns      { transition-delay: 0.55s; }
        .hero-scroll    { transition-delay: 0.70s; }

        .hero-image-wrap {
          opacity: 0;
          transform: scale(0.97) translateY(14px);
          transition: opacity 0.9s ease, transform 0.9s ease;
          transition-delay: 0.2s;
        }
        .hero--visible .hero-image-wrap { opacity: 1; transform: scale(1) translateY(0); }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.45; }
          50%       { opacity: 0.65; }
        }
        .glow-blob {
          animation: glowPulse 5s ease-in-out infinite;
        }

        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(5px); }
        }
        .scroll-bob { animation: bob 2.4s ease-in-out infinite; }

        .btn-primary { transition: background 0.2s, transform 0.2s, box-shadow 0.2s; }
        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(255,255,255,0.28);
        }
        .btn-secondary { transition: background 0.2s, transform 0.2s, border-color 0.2s; }
        .btn-secondary:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.22);
        }

        .img-shine::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.07) 0%,
            transparent 50%,
            rgba(90,52,44,0.12) 100%
          );
          pointer-events: none;
        }

        .deco-line {
          display: inline-block;
          width: 36px;
          height: 1.5px;
          background: linear-gradient(90deg, rgba(255,255,255,0.55), transparent);
          margin-right: 10px;
          vertical-align: middle;
          flex-shrink: 0;
        }

        .tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 20px;
        }
        .tag-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(200, 120, 100, 0.8);
        }
      `}</style>

      <section
        ref={containerRef}
        className="hero-root min-h-screen flex items-center justify-center pt-20 pb-8 px-3 md:px-12"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14 md:gap-16">

          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <h1 className="hero-text-block hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.08]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/95 to-white/50">
                {personalData.name}
              </span>
            </h1>

            <div className="hero-text-block hero-role flex items-center gap-0 mt-3 md:mt-4 justify-center md:justify-start">
              {/* <span className="deco-line"></span> */}
              <span className="text-lg sm:text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[rgba(210,140,120,0.9)] to-[rgba(255,255,255,0.5)] tracking-wide">
                {personalData.title}
              </span>
            </div>

            <div
              className="hero-text-block hero-divider mt-7 mb-0 w-full flex justify-center md:justify-start"
            >
              <div style={{
                width: '48px',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.2), transparent)'
              }} />
            </div>

            <p className="hero-text-block hero-intro mt-6 text-base md:text-lg text-white/50 max-w-md leading-relaxed font-light">
              {personalData.intro}
            </p>

            <div className="hero-text-block hero-btns flex flex-wrap justify-center md:justify-start gap-3 mt-9">
              <a
  href="/resume.pdf"
  download="Abhishek_Mandal_Resume.pdf"
  className="btn-primary flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 md:px-9 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-[0_4px_20px_rgba(255,255,255,0.22)] active:scale-95"
>
  Resume <FaDownload size={14} />
</a>
              <a
                href="#contact"
                className="btn-secondary text-white/80 px-7 py-3.5 md:px-9 md:py-4 rounded-full font-semibold text-sm md:text-base border border-white/12 backdrop-blur-sm active:scale-95"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
            <div className="hero-image-wrap relative">
              <div
                className="glow-blob absolute -inset-6 rounded-[32px]"
                style={{
                  background: 'radial-gradient(ellipse at 60% 40%, rgba(90,52,44,0.55) 0%, transparent 70%)',
                  filter: 'blur(32px)',
                  zIndex: 0,
                }}
              />

              <div
                className="absolute -inset-3 rounded-[28px]"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  filter: 'blur(20px)',
                  zIndex: 0,
                }}
              />

              <div
                className="img-shine relative rounded-[24px] overflow-hidden border border-white/[0.11] shadow-[0_32px_80px_rgba(0,0,0,0.55)]"
                style={{
                  width: 'clamp(260px, 38vw, 420px)',
                  height: 'clamp(300px, 44vw, 500px)',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(10px)',
                  zIndex: 1,
                }}
              >
                <img
                  src={myImage1}
                  alt={personalData.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div
                className="absolute -top-5 -right-5 opacity-20"
                style={{ zIndex: 0 }}
                aria-hidden="true"
              >
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <div
                        key={j}
                        className="w-[3px] h-[3px] rounded-full bg-white"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;