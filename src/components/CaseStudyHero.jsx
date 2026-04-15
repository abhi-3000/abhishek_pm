const CaseStudyHero = ({ title, shortAbout, liveLink, heroImage }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5">
      <div className="absolute inset-0 bg-white/5 rounded-[32px] md:rounded-full blur-[100px] scale-110 opacity-30 pointer-events-none"></div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 w-full">
          <h1 className="hero-text-block hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.08]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/95 to-white/50">
                          {title}
                        </span>
                      </h1>
          
          <p className="mt-6 text-base md:text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed">
            {shortAbout}
          </p>
          <div className="mt-8 flex gap-4">
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-[32px] font-semibold text-sm md:text-base hover:bg-white/90 transition-transform active:scale-95 shadow-[0_4px_14px_0_rgba(255,255,255,0.39)]"
            >
              Live Project
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2 w-full md:max-w-2xl">
          <div className="relative w-full aspect-video rounded-[32px] overflow-hidden border border-white/10 backdrop-blur-[21px] shadow-[0_28px_80px_rgba(0,0,0,0.4)] bg-white/5">
            <img 
              src={heroImage} 
              alt={`${title} Preview`} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CaseStudyHero;