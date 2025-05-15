"use client";
import { useState, useEffect, useRef } from 'react';
import { Dumbbell, Clock, Users, ArrowRight, Menu, X } from 'lucide-react';

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

function ProgramCard({ title, description, image, level, scrollY, index }) {
  const threshold = 1000 + (index * 100);
  const opacity = scrollY > threshold ? 1 : 0;
  const translateY = scrollY > threshold ? 0 : 50;
  
  return (
    <div 
      className="bg-zinc-900 rounded-xl overflow-hidden group hover:scale-105 transition-all duration-500"
      style={{
        opacity: opacity,
        transform: `translateY(${translateY}px)`,
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

export default function CrossFitSite() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = scrollY > 50 
    ? "fixed w-full py-4 bg-black/90 shadow-lg transition-all duration-300 z-50" 
    : "fixed w-full py-6 bg-transparent transition-all duration-300 z-50";

  return (
    <div className="bg-zinc-900 text-white">
      <nav className={navClasses}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Dumbbell className="text-red-500" size={28} />
            <span className="font-bold text-xl">FORCE<span className="text-red-500">FLOW</span></span>
          </div>
          
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#" className="hover:text-red-500 transition-colors">Programas</a>
            <a href="#" className="hover:text-red-500 transition-colors">Coaches</a>
            <a href="#" className="hover:text-red-500 transition-colors">Horários</a>
            <a href="#" className="hover:text-red-500 transition-colors">Comunidade</a>
            <a href="#" className="ml-4 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105">
              EXPERIMENTE
            </a>
          </div>
        </div>
        
        {menuOpen && (
          <div className="lg:hidden bg-zinc-800 absolute w-full py-4 px-4 shadow-xl">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-red-500 transition-colors py-2 border-b border-zinc-700">Home</a>
              <a href="#" className="hover:text-red-500 transition-colors py-2 border-b border-zinc-700">Programas</a>
              <a href="#" className="hover:text-red-500 transition-colors py-2 border-b border-zinc-700">Coaches</a>
              <a href="#" className="hover:text-red-500 transition-colors py-2 border-b border-zinc-700">Horários</a>
              <a href="#" className="hover:text-red-500 transition-colors py-2 border-b border-zinc-700">Comunidade</a>
              <a href="#" className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full font-bold text-center transition-all duration-300 hover:scale-105 mt-2">
                EXPERIMENTE
              </a>
            </div>
          </div>
        )}
      </nav>
      
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-30">
          {Array(144).fill().map((_, i) => (
            <div 
              key={i}
              className="border border-zinc-700"
              style={{
                transform: `translate(${Math.sin((scrollY + i) * 0.01) * 10}px, ${Math.cos((scrollY + i) * 0.01) * 10}px)`,
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
            transform: `translate(${scrollY * 0.1}px, ${scrollY * -0.05}px)` 
          }}
        ></div>
        <div 
          className="absolute rounded-full bg-blue-500/10 w-64 h-64 blur-3xl"
          style={{ 
            right: '15%', 
            bottom: '30%',
            transform: `translate(${scrollY * -0.15}px, ${scrollY * 0.1}px)` 
          }}
        ></div>
        
        <div 
          className="container mx-auto px-4 z-10 flex flex-col gap-8"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)`,
            opacity: 1 - (scrollY * 0.001),
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
            <a 
              href="#" 
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:gap-4"
            >
              COMECE AGORA <ArrowRight />
            </a>
          </div>
        </div>
        
        <div 
          className="absolute bottom-12 left-0 right-0 mx-auto w-full max-w-5xl bg-zinc-800/80 backdrop-blur-md rounded-xl p-4 md:p-6 z-20"
          style={{ 
            transform: `translateY(${Math.max(0, 100 - scrollY)}px)`,
            opacity: Math.min(1, scrollY * 0.01),
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
      
      <section className="py-20 bg-zinc-800">
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
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="relative py-32 overflow-hidden">
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
                transform: `translateX(${Math.sin((scrollY + i * 200) * 0.002) * 10}%)`,
                opacity: 0.5 + (Math.sin((scrollY + i) * 0.01) * 0.5),
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              PRONTO PARA <span className="text-red-500">TRANSFORMAR</span> SEU CORPO?
            </h2>
            <p className="text-xl text-zinc-300 mb-10">
              Junte-se a centenas de pessoas que já mudaram suas vidas através do nosso método exclusivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                AGENDAR AULA EXPERIMENTAL
              </a>
              <a 
                href="#" 
                className="bg-transparent border-2 border-white/30 hover:border-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                CONHECER ESPAÇO
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex items-center gap-2">
              <Dumbbell className="text-red-500" size={28} />
              <span className="font-bold text-xl">FORCE<span className="text-red-500">FLOW</span></span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Navegação</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Programas</a></li>
                  <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Coaches</a></li>
                  <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Horários</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Contato</h3>
                <ul className="space-y-2">
                  <li className="text-zinc-400">(99) 99999-9999</li>
                  <li className="text-zinc-400">contato@forceflow.com</li>
                  <li className="text-zinc-400">Avenida Fitness, 123</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Horários</h3>
                <ul className="space-y-2">
                  <li className="text-zinc-400">Segunda a Sexta: 6h às 22h</li>
                  <li className="text-zinc-400">Sábados: 8h às 18h</li>
                  <li className="text-zinc-400">Domingos: 8h às 12h</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-zinc-800 text-center text-zinc-500">
            <p>© 2025 ForceFlow CrossFit. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}