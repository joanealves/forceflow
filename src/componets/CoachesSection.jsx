"use client";
import { useRef, useState, useEffect } from 'react';
import CoachCard from './CoachCard';

const coachesData = [
  {
    name: "Rodrigo Almeida",
    specialty: "CrossFit Level 3 Trainer",
    image: "/assets/rodrigo.png",
    instagram: "rodrigo.trainer"
  },
  {
    name: "Camila Santos",
    specialty: "Olympic Weightlifting Specialist",
    image: "/assets/camila.png",
    instagram: "camila.lift"
  },
  {
    name: "Bruno Costa",
    specialty: "Mobility & Gymnastics Expert",
    image: "/assets/bruno.png",
    instagram: "bruno.mobility"
  },
  {
    name: "Juliana Mendes",
    specialty: "Nutrition Coach",
    image: "/assets/juliana.png",
    instagram: "juliana.nutrition"
  }
];

export default function CoachesSection({ scrollY }) {
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
    <section ref={sectionRef} id="coaches" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            NOSSA <span className="text-red-500">EQUIPE</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Profissionais altamente qualificados e apaixonados por transformar vidas através do fitness.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : 50}px)`,
            transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)'
          }}
        >
          {coachesData.map((coach, index) => (
            <CoachCard
              key={index}
              name={coach.name}
              specialty={coach.specialty}
              image={coach.image}
              instagram={coach.instagram}
            />
          ))}
        </div>
      </div>
    </section>
  );
}