"use client";
import { useState, useEffect } from 'react';
import Layout from '../../componets/Layout';
import { Instagram, Facebook, Users, Calendar, Camera } from 'lucide-react';

export default function ComunidadePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('eventos');
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);
  
  const events = [
    {
      title: "ForceFlow Throwdown",
      date: "25 de Junho, 2025",
      image: "/api/placeholder/600/400",
      description: "Competição interna com diversas categorias. Venha testar seus limites e se divertir com nossa comunidade!",
      link: "#"
    },
    {
      title: "Workshop de Levantamento Olímpico",
      date: "12 de Julho, 2025",
      image: "/api/placeholder/600/400",
      description: "Aprenda técnicas avançadas de snatch e clean & jerk com nossos coaches especialistas.",
      link: "#"
    },
    {
      title: "Desafio de Verão",
      date: "5 a 30 de Janeiro, 2026",
      image: "/api/placeholder/600/400",
      description: "Um mês de desafios diários para transformar seu corpo e sua mente durante as férias.",
      link: "#"
    }
  ];
  
  const gallery = [
    { image: "/api/placeholder/600/400", caption: "Competição interna 2024" },
    { image: "/api/placeholder/600/400", caption: "Treino na praia" },
    { image: "/api/placeholder/600/400", caption: "Workshop de mobilidade" },
    { image: "/api/placeholder/600/400", caption: "Aula especial de aniversário" },
    { image: "/api/placeholder/600/400", caption: "Equipe ForceFlow na competição estadual" },
    { image: "/api/placeholder/600/400", caption: "Confraternização de final de ano" },
    { image: "/api/placeholder/600/400", caption: "Treino de levantamento olímpico" },
    { image: "/api/placeholder/600/400", caption: "Café da manhã pós-treino" }
  ];
  
  const stories = [
    {
      name: "Marcelo Souza",
      image: "/api/placeholder/150/150",
      title: "Superando limites",
      text: "Após dois anos sedentário, encontrei no ForceFlow não apenas uma academia, mas uma família que me ajudou a perder 25kg e recuperar minha autoestima."
    },
    {
      name: "Ana Clara",
      image: "/api/placeholder/150/150",
      title: "Do básico ao avançado",
      text: "Nunca imaginei que conseguiria fazer uma barra livre, muito menos um muscle-up. Hoje, 18 meses depois, já participo de competições regionais."
    },
    {
      name: "Roberto e Patrícia",
      image: "/api/placeholder/150/150",
      title: "Transformação em casal",
      text: "Começamos juntos há 1 ano e mudamos completamente nosso estilo de vida. Os treinos viraram nosso momento favorito do dia e estamos mais saudáveis do que nunca."
    }
  ];
  
  return (
    <Layout>
      <div className="bg-zinc-900 py-32">
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 30}px)`,
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)'
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              NOSSA <span className="text-red-500">COMUNIDADE</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Mais que um box de CrossFit, somos uma família unida pelo objetivo de superar limites
              e celebrar conquistas juntos.
            </p>
          </div>
          
          <div 
            className="flex justify-center mb-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 30}px)`,
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s'
            }}
          >
            <div className="inline-flex bg-zinc-800 rounded-full p-1">
              <button 
                onClick={() => setActiveTab('eventos')} 
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeTab === 'eventos' ? 'bg-red-500 text-white' : 'text-zinc-300 hover:text-white'}`}
              >
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  EVENTOS
                </span>
              </button>
              <button 
                onClick={() => setActiveTab('galeria')} 
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeTab === 'galeria' ? 'bg-red-500 text-white' : 'text-zinc-300 hover:text-white'}`}
              >
                <span className="flex items-center gap-2">
                  <Camera size={16} />
                  GALERIA
                </span>
              </button>
              <button 
                onClick={() => setActiveTab('historias')} 
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeTab === 'historias' ? 'bg-red-500 text-white' : 'text-zinc-300 hover:text-white'}`}
              >
                <span className="flex items-center gap-2">
                  <Users size={16} />
                  HISTÓRIAS
                </span>
              </button>
            </div>
          </div>
          
          {/* Eventos */}
          {activeTab === 'eventos' && (
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : 50}px)`,
                transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
              }}
            >
              {events.map((event, index) => (
                <div key={index} className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg group hover:scale-105 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-red-500 text-xs px-3 py-1 rounded-full">{event.date}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-zinc-300 mb-4">{event.description}</p>
                    <a 
                      href={event.link} 
                      className="inline-block bg-zinc-700 hover:bg-red-500 px-4 py-2 rounded-full font-bold text-sm transition-colors"
                    >
                      SAIBA MAIS
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Galeria */}
          {activeTab === 'galeria' && (
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : 50}px)`,
                transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
              }}
            >
              {gallery.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.caption} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-sm font-medium">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Histórias */}
          {activeTab === 'historias' && (
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : 50}px)`,
                transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
              }}
            >
              {stories.map((story, index) => (
                <div key={index} className="bg-zinc-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{story.name}</h4>
                      <p className="text-red-500">{story.title}</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 italic">"{story.text}"</p>
                </div>
              ))}
            </div>
          )}
          
          {/* Social Media */}
          <div 
            className="bg-zinc-800 p-8 rounded-xl max-w-4xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 50}px)`,
              transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s'
            }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Conecte-se Conosco</h3>
              <p className="text-zinc-300">
                Siga nossas redes sociais para acompanhar o dia a dia do box, 
                dicas de treino e nutrição, e eventos exclusivos.
              </p>
            </div>
            
            <div className="flex justify-center gap-6">
              <a 
                href="https://instagram.com/forceflow" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
              >
                <div className="bg-gradient-to-br from-purple-600 to-red-500 p-4 rounded-full">
                  <Instagram size={24} />
                </div>
                <span className="font-bold">Instagram</span>
              </a>
              
              <a 
                href="https://facebook.com/forceflow" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
              >
                <div className="bg-blue-600 p-4 rounded-full">
                  <Facebook size={24} />
                </div>
                <span className="font-bold">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}