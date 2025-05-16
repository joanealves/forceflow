"use client";
import { useState, useEffect } from 'react';
import Layout from '../../componets/Layout';
import CoachCard from '../../componets/CoachCard';

export default function CoachesPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);
  
  const coachesData = [
    {
      name: "Rodrigo Almeida",
      specialty: "CrossFit Level 3 Trainer",
      image: "/api/placeholder/400/500",
      instagram: "rodrigo.trainer",
      bio: "Coach Rodrigo é especialista em movimentos olímpicos e treinos de alta intensidade. Com mais de 10 anos de experiência, já formou dezenas de atletas competitivos.",
      certifications: ["CrossFit Level 3 Trainer", "Olympic Weightlifting Level 2", "Mobility Specialist"]
    },
    {
      name: "Camila Santos",
      specialty: "Olympic Weightlifting Specialist",
      image: "/api/placeholder/400/500",
      instagram: "camila.lift",
      bio: "Especialista em levantamento olímpico, Camila é atleta de competições nacionais e se dedica a ensinar técnicas avançadas e seguras para movimentos complexos.",
      certifications: ["CrossFit Level 2 Trainer", "Olympic Weightlifting Expert", "Nutrition Coach"]
    },
    {
      name: "Bruno Costa",
      specialty: "Mobility & Gymnastics Expert",
      image: "/api/placeholder/400/500",
      instagram: "bruno.mobility",
      bio: "Bruno traz uma abordagem única combinando ginástica e mobilidade ao CrossFit. Seu foco é ajudar atletas a superarem limitações físicas para movimentos avançados.",
      certifications: ["CrossFit Gymnastics", "Movement Specialist", "Injury Prevention Coach"]
    },
    {
      name: "Juliana Mendes",
      specialty: "Nutrition Coach",
      image: "/api/placeholder/400/500",
      instagram: "juliana.nutrition",
      bio: "Nutricionista esportiva especializada em atletas de CrossFit, Juliana ajuda os membros a otimizarem sua alimentação para performance e resultados estéticos.",
      certifications: ["Sports Nutrition Specialist", "CrossFit Level 1 Trainer", "Precision Nutrition Coach"]
    },
    {
      name: "Marcos Oliveira",
      specialty: "Endurance & Conditioning Coach",
      image: "/api/placeholder/400/500",
      instagram: "marcos.endurance",
      bio: "Ex-atleta de triatlons, Marcos se especializou em desenvolver capacidade cardiorrespiratória e endurance para atletas de todas as modalidades.",
      certifications: ["CrossFit Endurance", "Running Coach", "Triathlon Specialist"]
    },
    {
      name: "Patrícia Lima",
      specialty: "CrossFit Kids & Teens Coach",
      image: "/api/placeholder/400/500",
      instagram: "paty.crossfit",
      bio: "Especialista em treinamento funcional para crianças e adolescentes, Patrícia desenvolve programas que combinam diversão e desenvolvimento motor.",
      certifications: ["CrossFit Kids", "Youth Fitness Specialist", "Physical Education"]
    }
  ];
  
  return (
    <Layout>
      <div className="bg-zinc-900 py-32">
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-16"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 30}px)`,
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)'
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              NOSSOS <span className="text-red-500">COACHES</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Conheça nosso time de profissionais altamente qualificados e apaixonados 
              por transformar vidas através do fitness.
            </p>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 50}px)`,
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
            }}
          >
            {coachesData.map((coach, index) => (
              <div key={index} className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={coach.image} 
                    alt={coach.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{coach.name}</h3>
                  <p className="text-red-500 font-medium mb-3">{coach.specialty}</p>
                  <p className="text-zinc-300 mb-4">{coach.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold mb-2 text-sm uppercase text-zinc-400">Certificações</h4>
                    <ul className="space-y-1">
                      {coach.certifications.map((cert, i) => (
                        <li key={i} className="text-sm text-zinc-300">• {cert}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={`https://instagram.com/${coach.instagram}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 font-bold text-zinc-400 hover:text-white transition-colors"
                  >
                    @{coach.instagram}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            className="bg-zinc-800 p-8 rounded-xl max-w-4xl mx-auto text-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 50}px)`,
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s'
            }}
          >
            <h3 className="text-2xl font-bold mb-4">Interessado em treinar conosco?</h3>
            <p className="text-zinc-300 mb-6">
              Nossos coaches estão prontos para te ajudar a alcançar seus objetivos,
              independente do seu nível atual. Agende uma aula experimental hoje mesmo!
            </p>
            <a 
              href="#" 
              className="inline-block bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              AGENDAR AULA EXPERIMENTAL
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}