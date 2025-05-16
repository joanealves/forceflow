"use client";
import { useState, useEffect } from 'react';
import Layout from '../../componets/Layout';
import ScheduleTable from '../../componets/ScheduleTable';

export default function SchedulePage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);
  
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
              <span className="text-red-500">HORÁRIOS</span> DE AULAS
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Escolha o melhor horário para seu treino e comece sua transformação hoje mesmo.
            </p>
          </div>
          
          <div 
            className="bg-zinc-800 p-6 rounded-xl shadow-xl mb-16"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 50}px)`,
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
            }}
          >
            <ScheduleTable />
          </div>
          
          <div 
            className="bg-zinc-800 p-8 rounded-xl text-center max-w-3xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 50}px)`,
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s'
            }}
          >
            <h3 className="text-2xl font-bold mb-4">Agende uma Aula Experimental</h3>
            <p className="text-zinc-300 mb-6">
              Não tem certeza se nossos horários se encaixam na sua rotina? Agende uma conversa com nossa equipe para encontrar a melhor solução.
            </p>
            <a 
              href="#" 
              className="inline-block bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              AGENDAR AGORA
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}