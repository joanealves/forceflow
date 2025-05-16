"use client";
import { useRef, useState, useEffect } from 'react';
import Testimonial from './Testimonial';

const testimonialsData = [
  {
    name: "André Silva",
    position: "Membro há 2 anos",
    image: "/assets/depoimentos/paulo.png",
    text: "Em apenas 3 meses de treino, perdi 12kg e ganhei uma confiança que nunca tive antes. Os treinadores são incríveis!"
  },
  {
    name: "Marina Oliveira",
    position: "Membro há 1 ano",
    image: "/assets/depoimentos/marina.png",
    text: "Após meu primeiro filho, achei que nunca mais voltaria à forma. A comunidade ForceFlow me motivou todos os dias."
  },
  {
    name: "Rafael Mendes",
    position: "Membro há 3 anos",
    image: "/assets/depoimentos/rafael.png",
    text: "Como atleta amador, o programa Elite me ajudou a melhorar meu desempenho em competições locais de forma impressionante."
  },
  {
    name: "Gabriela Costa",
    position: "Membro há 6 meses",
    image: "/assets/depoimentos/anaclara.png",
    text: "Nunca gostei de academias tradicionais. Aqui encontrei uma comunidade que me apoia e desafia todos os dias!"
  },
  {
    name: "Lucas Ferreira",
    position: "Membro há 1 ano",
    image: "/assets/depoimentos/luis.png",
    text: "Os treinadores são extremamente atentos à técnica. Me ajudaram a superar dores crônicas e a me tornar mais forte."
  },
  {
    name: "Carolina Lima",
    position: "Membro há 8 meses",
    image: "/assets/depoimentos/anaclara.png",
    text: "Comecei com zero experiência. Hoje faço movimentos que nunca imaginei ser capaz. O ambiente é acolhedor para todos os níveis."
  }
];

export default function TestimonialsSection({ scrollY }) {
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
    <section ref={sectionRef} id="depoimentos" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-red-500">DEPOIMENTOS</span> DE MEMBROS
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Histórias reais de transformação que acontecem todos os dias em nossa comunidade.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : 50}px)`,
            transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)'
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              image={testimonial.image}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}