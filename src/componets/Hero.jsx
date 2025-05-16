"use client";
import { useRef } from 'react';
import { Dumbbell, Clock, Users, ArrowRight } from 'lucide-react';

export default function Hero({ scrollY, onStartNow }) {
  const heroRef = useRef(null);
  
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-30">
        {Array(144).fill().map((_, i) => (
          <div 
            key={i}
            className="border border-zinc-700"
            style={{
              transform: `translate(${(Math.sin((scrollY + i) * 0.01) * 10).toFixed(4)}px, ${(Math.cos((scrollY + i) * 0.01) * 10).toFixed(4)}px)`,
              transition: 'transform 0.5s ease-out'
            }}
          ></div>
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      
      <div 
        className="absolute rounded-full bg-red-500/20 w-96 h-96 blur-3xl"
        style={{ 
          left: '10%', 
          top: '20%',
          transform: `translate(${(scrollY * 0.1).toFixed(4)}px, ${(scrollY * -0.05).toFixed(4)}px)` 
        }}
      ></div>
      <div 
        className="absolute rounded-full bg-blue-500/10 w-64 h-64 blur-3xl"
        style={{ 
          right: '15%', 
          bottom: '30%',
          transform: `translate(${(scrollY * -0.15).toFixed(4)}px, ${(scrollY * 0.1).toFixed(4)}px)` 
        }}
      ></div>
      
      <div 
        className="container mx-auto px-4 z-10 flex flex-col gap-8"
        style={{ 
          transform: `translateY(${(scrollY * 0.2).toFixed(4)}px)`,
          opacity: (1 - (scrollY * 0.001)).toFixed(4),
        }}
      >
        <h1 className="text-6xl md:text-8xl font-black text-center">
          <span className="inline-block animate-pulse">SUPERE</span>
          <span className="block text-red-500">SEUS LIMITES</span>
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto text-zinc-300">
          Treinamento funcional de alta intensidade com uma comunidade que te impulsiona a cada dia.
        </p>
        <div className="flex justify-center mt-8">
          <button 
            onClick={onStartNow}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:gap-4"
          >
            COMECE AGORA <ArrowRight />
          </button>
        </div>
      </div>
      
      <div 
        className="absolute bottom-12 left-0 right-0 mx-auto w-full max-w-5xl bg-zinc-800/80 backdrop-blur-md rounded-xl p-4 md:p-6 z-20"
        style={{ 
          transform: `translateY(${(Math.max(0, 100 - scrollY)).toFixed(4)}px)`,
          opacity: (Math.min(1, scrollY * 0.01)).toFixed(4),
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-red-500/20 p-4 rounded-full">
              <Dumbbell className="text-red-500" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">120+</h3>
              <p className="text-zinc-400">Exercícios Funcionais</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-red-500/20 p-4 rounded-full">
              <Clock className="text-red-500" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-zinc-400">Horários Flexíveis</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-red-500/20 p-4 rounded-full">
              <Users className="text-red-500" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-zinc-400">Membros Ativos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}