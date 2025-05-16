"use client";
import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function ProgramDetailsModal({ isOpen, onClose, title, description, level }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="bg-zinc-900 rounded-xl w-full max-w-2xl z-10 shadow-xl overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-zinc-800">
          <h3 className="text-2xl font-bold">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <span className="bg-red-500 text-xs px-3 py-1 rounded-full">
              {level}
            </span>
          </div>
          
          <p className="text-zinc-300 mb-6">{description}</p>
          
          <div className="space-y-4">
            <h4 className="text-xl font-bold">O que você aprenderá:</h4>
            <ul className="space-y-2">
              {title === "INICIANTE" && (
                <>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Fundamentos e técnica básica de movimentos funcionais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Desenvolvimento de mobilidade e flexibilidade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Condicionamento cardiovascular inicial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Introdução às rotinas de treino em grupo</span>
                  </li>
                </>
              )}
              
              {title === "INTERMEDIÁRIO" && (
                <>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Técnicas avançadas de levantamento de peso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Progressão em movimentos de ginástica e calistenia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Aprimoramento de resistência e velocidade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Estratégias para workouts complexos</span>
                  </li>
                </>
              )}
              
              {title === "ELITE" && (
                <>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Programação personalizada para alto rendimento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Treinamento específico para competições</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Nutrição e recuperação avançada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Análise de desempenho e monitoramento de métricas</span>
                  </li>
                </>
              )}
            </ul>
          </div>
          
          <div className="mt-8">
            <h4 className="text-xl font-bold mb-4">Valor do Investimento:</h4>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-zinc-300">Plano Mensal</p>
                  <p className="text-xs text-zinc-500">Pago mensalmente</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {title === "INICIANTE" && "R$ 199,90"}
                    {title === "INTERMEDIÁRIO" && "R$ 249,90"}
                    {title === "ELITE" && "R$ 299,90"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg mt-6 transition-colors"
          >
            QUERO COMEÇAR AGORA
          </button>
        </div>
      </div>
    </div>
  );
}