"use client";
import { useRef, useState, useEffect } from 'react';

export default function CallToAction({ scrollY, onScheduleTrial, setExploreSpaceModalOpen }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const checkVisibility = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.8) {
        setIsVisible(true);
      }
    };
    
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [scrollY]);
  
  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-black z-0"></div>
      
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array(20).fill().map((_, i) => (
          <div 
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
            style={{
              top: `${i * 6}%`,
              left: '-10%',
              right: '-10%',
              transform: `translateX(${(Math.sin((scrollY + i * 200) * 0.002) * 10).toFixed(4)}%)`,
              opacity: (0.5 + (Math.sin((scrollY + i) * 0.01) * 0.5)).toFixed(4),
            }}
          ></div>
        ))}
      </div>
      
      <div 
        className="container mx-auto px-4 relative z-10"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? 0 : 50}px)`,
          transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)'
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            PRONTO PARA <span className="text-red-500 animate-pulse"  >TRANSFORMAR</span> SEU CORPO?
          </h2>
          <p className="text-xl text-zinc-300 mb-10">
            Junte-se a centenas de pessoas que já mudaram suas vidas através do nosso método exclusivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onScheduleTrial}
              className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              AGENDAR AULA EXPERIMENTAL
            </button>
            <button 
              onClick={() => setExploreSpaceModalOpen(true)}
              className="bg-transparent border-2 border-white/30 hover:border-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              CONHECER ESPAÇO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}