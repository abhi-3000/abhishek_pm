import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { caseStudyProjects } from '../constants';
import Navbar from './Navbar';
import CaseStudyHero from './CaseStudyHero';
import CaseStudyTextSection from './CaseStudyTextSection';
import CaseStudyTable from './CaseStudyTable';
import CaseStudySolution from './CaseStudySolution';
import CaseStudyImpact from './CaseStudyImpact';
import CTA from './Contact';
import Footer from './Footer';

const CaseStudyPage = () => {
  const { projectId } = useParams();
  const projectData = caseStudyProjects[projectId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!projectData) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] font-golos flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center text-white/60">
          Project Not Found.
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b140f] to-[#0f0f0f] font-golos selection:bg-white/20 selection:text-white overflow-x-hidden tracking-tight">
      <Navbar />
      
      <main>
        <CaseStudyHero 
          title={projectData.title}
          shortAbout={projectData.shortAbout}
          liveLink={projectData.liveLink}
          heroImage={projectData.heroImage}
        />
        
        <section className="max-w-7xl mx-auto px-3 md:px-12 py-12 md:py-16 space-y-10 md:space-y-16">
          <CaseStudyTextSection number="1" title="The Vision and the Monopoly Problem" content={projectData.vision} />
          
          <div className="flex flex-col gap-6">
            <CaseStudyTable number="2" title="Market Research and Opportunity (TAM)" description={projectData.marketResearch.text} tableData={projectData.marketResearch.table} />
            <p className="text-white/70 text-base md:text-lg leading-relaxed">{projectData.marketResearch.competition}</p>
          </div>

          <CaseStudyTextSection number="3" title="User Personas" listItems={projectData.userPersonas} />
          <CaseStudyTextSection number="4" title="Product Development Journey" content={projectData.devJourney} />
          <CaseStudyTextSection number="5" title="Technical Solution: The Dynamic Engine" content={projectData.techSolution} />
          <CaseStudyTextSection number="6" title="UI and UX Philosophy" listItems={projectData.uiUx} />
            <CaseStudySolution solutionPoints={projectData.userJourney} title="User Journey"/>
          <CaseStudyTextSection number="8" title="Offline Marketing and Collaborations" content={projectData.offlineMarketing.text} listItems={projectData.offlineMarketing.points} conclusion={projectData.offlineMarketing.conclusion} />
          <CaseStudyTextSection number="9" title="Transparent Pricing Model" content={projectData.pricingModel} />
          
          <CaseStudyTable number="10" title="Competitive Advantage Matrix" description="This matrix explains how we win against traditional and digital competitors." tableData={projectData.competitiveMatrix} />
            <CaseStudyImpact impactContent={projectData.impact} title="Impact & Results"/>

          <CaseStudyTextSection number="12" title="Risk Assessment and Mitigation" listItems={projectData.riskAssessment} />
          <CaseStudyTextSection number="13" title="Success Metrics (KPIs)" listItems={projectData.successMetrics} />
            <CaseStudySolution solutionPoints={projectData.futureScope} title="Future Scope and Scaling Strategy"/>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
};

export default CaseStudyPage;