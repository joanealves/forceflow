"use client";
import { useRef, useState, useEffect } from 'react';
import Layout from '../componets/Layout';
import Hero from '../componets/Hero';
import ProgramsSection from '../componets/ProgramsSection';
import CallToAction from '../componets/CallToAction';
import TestimonialsSection from '../componets/TestimonialSection';
import CoachesSection from '../componets/CoachesSection';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const programsSectionRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <Hero scrollY={scrollY} />
      <ProgramsSection ref={programsSectionRef} scrollY={scrollY} />
      <CoachesSection scrollY={scrollY} />
      <TestimonialsSection scrollY={scrollY} />
      <CallToAction scrollY={scrollY} />
    </Layout>
  );
}