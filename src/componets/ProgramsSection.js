"use client";
import { forwardRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const programData = [
  {
    title: "INICIANTE",
    description: "Ideal para quem está começando sua jornada no CrossFit com foco em técnica e condicionamento básico.",
    image: "/api/placeholder/600/400",
    level: "Básico"
  },
  {
    title: "INTERMEDIÁRIO",
    description: "Para atletas com experiência que buscam melhorar performance e técnica em movimentos avançados.",
    image: "/api/placeholder/600/400",
    level: "Médio"
  },
  {
    title: "ELITE",
    description: "Treinamento de alta performance para atletas que desejam competir ou atingir resultados excepcionais.",
    image: "/api/placeholder/600/400",
    level: "Avançado"
  }
];

function ProgramCard({ title, description, image, level, scrollY, index, sectionRef }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const checkVisibility = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.8 - (index * 100)) {
        setIsVisible(true);
      }
    };
    
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [scrollY, index, sectionRef]);
  
  return (
    <div 
      className="bg-zinc-900 rounded-xl overflow-hidden group hover:scale-105 transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : 50}px)`,
        transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)'
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-red-500 text-xs px-3 py-1 rounded-full">{level}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-zinc-400">{description}</p>
        <a 
          href="#" 
          className="mt-6 inline-flex items-center gap-2 font-bold text-red-500 hover:text-red-400 transition-colors"
        >
          SAIBA MAIS <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

const ProgramsSection = forwardRef(({ scrollY }, ref) => {
  return (
    <section ref={ref} id="programas" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">PROGRAMAS <span className="text-red-500">PERSONALIZADOS</span></h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Treinamentos adaptados ao seu nível e objetivos, com acompanhamento constante.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programData.map((program, index) => (
            <ProgramCard 
              key={index}
              title={program.title}
              description={program.description}
              image={program.image}
              level={program.level}
              scrollY={scrollY}
              index={index}
              sectionRef={ref}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

ProgramsSection.displayName = 'ProgramsSection';

export default ProgramsSection;