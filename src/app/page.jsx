"use client";
import { useRef, useState, useEffect } from 'react';
import Layout from '../componets/Layout';
import Hero from '../componets/Hero';
import ProgramsSection from '../componets/ProgramsSection';
import CallToAction from '../componets/CallToAction';
import TestimonialsSection from '../componets/TestimonialSection';
import CoachesSection from '../componets/CoachesSection';
import Modal from '../componets/Modal';
import ProgramDetails from '../componets/ProgramDetails';
import TrialForm from '../componets/TrialForm'; 
import ExploreSpaceModal from '../componets/ExploreSpaceModal';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [exploreSpaceModalOpen, setExploreSpaceModalOpen] = useState(false);
  const [programDetailsModalOpen, setProgramDetailsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  
  const programsSectionRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProgramLearnMore = (title, description, level) => {
    setSelectedProgram({ title, description, level });
    setProgramDetailsModalOpen(true);
  };

  const handleStartNow = () => {
    setTrialModalOpen(true);
  };

  return (
    <Layout>
      <Hero 
        scrollY={scrollY} 
        onStartNow={handleStartNow}
      />
      <ProgramsSection 
        ref={programsSectionRef} 
        scrollY={scrollY} 
        onLearnMore={handleProgramLearnMore}
      />
      <CoachesSection scrollY={scrollY} />
      <TestimonialsSection scrollY={scrollY} />
      <CallToAction 
        scrollY={scrollY} 
        onScheduleTrial={() => setTrialModalOpen(true)}
        setExploreSpaceModalOpen={setExploreSpaceModalOpen}
      />

      {selectedProgram && (
        <Modal
          isOpen={programDetailsModalOpen}
          onClose={() => setProgramDetailsModalOpen(false)}
          title={`Programa ${selectedProgram.title}`}
        >
          <ProgramDetails 
            title={selectedProgram.title}
            description={selectedProgram.description}
            level={selectedProgram.level}
            onSchedule={() => {
              setProgramDetailsModalOpen(false);
              setTrialModalOpen(true);
            }}
          />
        </Modal>
      )}

      <ExploreSpaceModal 
        isOpen={exploreSpaceModalOpen} 
        onClose={() => setExploreSpaceModalOpen(false)} 
      />

      <Modal 
        isOpen={trialModalOpen} 
        onClose={() => setTrialModalOpen(false)} 
        title="Agende sua Aula Experimental"
      >
        <TrialForm onSubmitSuccess={() => {
          setTrialModalOpen(false);
        }} />
      </Modal>
    </Layout>
  );
}