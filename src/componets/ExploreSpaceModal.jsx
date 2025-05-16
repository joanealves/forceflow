"use client";
import { useState } from 'react';
import { MapPin, ArrowRight, Camera } from 'lucide-react';
import Modal from './Modal';

const spaceImages = [
  "/api/placeholder/800/500",
  "/api/placeholder/800/500",
  "/api/placeholder/800/500",
  "/api/placeholder/800/500"
];

export default function ExploreSpaceModal({ isOpen, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % spaceImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + spaceImages.length) % spaceImages.length);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Conheça Nosso Espaço"
      fullWidth={true}
    >
      <div className="space-y-6">
        <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
          <img
            src={spaceImages[currentImage]}
            alt={`Academia ForceFlow - Imagem ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prevImage}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ArrowRight size={20} className="transform rotate-180" />
            </button>
            <button
              onClick={nextImage}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {spaceImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentImage ? "bg-red-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full">
            <Camera size={18} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Estrutura de Primeira</h3>
            <ul className="space-y-2 text-zinc-300">
              <li>• 500m² de área para treinamento</li>
              <li>• Equipamentos de última geração</li>
              <li>• Área de condicionamento</li>
              <li>• Zona para levantamento de peso</li>
              <li>• Vestiários completos</li>
              <li>• Estacionamento próprio</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Localização</h3>
            <div className="bg-zinc-800 p-4 rounded-lg flex items-start gap-3">
              <MapPin className="text-red-500 mt-1" />
              <div>
                <p className="text-zinc-300">Avenida Fitness, 123</p>
                <p className="text-zinc-300">Centro - São Paulo/SP</p>
                <p className="text-zinc-300">CEP: 00000-000</p>
                <a
                  href="https://maps.google.com "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 font-bold inline-flex items-center gap-1 mt-2 hover:text-red-400 transition-colors"
                >
                  Ver no mapa <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full font-bold transition-all duration-300"
          >
            AGENDAR VISITA GUIADA
          </button>
        </div>
      </div>
    </Modal>
  );
}