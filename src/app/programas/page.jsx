"use client";
import { useState, useEffect } from 'react';
import Layout from '../../componets/Layout';
import { ArrowRight } from 'lucide-react';

export default function ProgramasPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);
  
  const programs = [
    {
      title: "INICIANTE",
      description: "Ideal para quem está começando sua jornada no CrossFit com foco em técnica e condicionamento básico.",
      features: [
        "Aulas de fundamentação",
        "Técnicas básicas de levantamento",
        "Adaptação de movimentos para iniciantes",
        "Foco em condicionamento aeróbico",
        "Desenvolvimento de mobilidade"
      ],
      price: "R$199/mês",
      image: "/assets/iniciante.png",
      color: "from-blue-600/20"
    },
    {
      title: "INTERMEDIÁRIO",
      description: "Para atletas com experiência que buscam melhorar performance e técnica em movimentos avançados.",
      features: [
        "Treinamento periodizado",
        "Técnicas avançadas de levantamento",
        "Intensificação de WODs",
        "Acompanhamento de performance",
        "Preparação para competições locais"
      ],
      price: "R$249/mês",
      image: "/assets/intermediario.png",
      color: "from-red-600/20",
      highlighted: true
    },
    {
      title: "ELITE",
      description: "Treinamento de alta performance para atletas que desejam competir ou atingir resultados excepcionais.",
      features: [
        "Programação personalizada",
        "Acompanhamento nutricional",
        "Análise biomecânica",
        "Treinamento específico para competições",
        "Aulas exclusivas para atletas avançados"
      ],
      price: "R$349/mês",
      image: "/assets/elite.png",
      color: "from-purple-600/20"
    },
    {
      title: "PERSONAL TRAINING",
      description: "Atendimento exclusivo e personalizado para alcançar seus objetivos específicos com maior rapidez.",
      features: [
        "Sessões individuais",
        "Programação totalmente personalizada",
        "Horários flexíveis",
        "Foco em objetivos específicos",
        "Avaliações físicas periódicas"
      ],
      price: "A partir de R$120/hora",
      image: "/assets/personal.png",
      color: "from-amber-600/20"
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
              NOSSOS <span className="text-red-500">PROGRAMAS</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Oferecemos diversos programas para atender diferentes níveis de experiência e objetivos.
              Encontre o que melhor se adapta ao seu perfil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {programs.map((program, index) => (
              <div 
                key={index}
                className={`bg-zinc-800 rounded-xl overflow-hidden shadow-lg relative`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${isVisible ? 0 : 50}px)`,
                  transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.1}s`
                }}
              >
                {program.highlighted && (
                  <div className="absolute top-4 right-4 bg-red-500 text-xs py-1 px-3 rounded-full font-bold">
                    MAIS POPULAR
                  </div>
                )}
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/5 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} to-transparent opacity-70`}></div>
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-3/5 p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-2">{program.title}</h2>
                    <p className="text-zinc-300 mb-4">{program.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-white">{program.price}</span>
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 hover:gap-3"
                      >
                        MATRICULAR <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
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
            <h3 className="text-2xl font-bold mb-4">Não sabe qual programa escolher?</h3>
            <p className="text-zinc-300 mb-6">
              Agende uma conversa com nossos coaches para uma avaliação personalizada e 
              descubra qual programa se encaixa melhor com seus objetivos.
            </p>
            <a 
              href="#" 
              className="inline-block bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              AGENDAR CONVERSA
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}