"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dumbbell, Menu, X } from 'lucide-react';
import NavLink from './NavLink';
import Modal from './Modal';
import ContactForm from './ContactForm';
import TrialForm from './TrialForm';
import SuccessMessage from './SuccessMessage';
import ExploreSpaceModal from './ExploreSpaceModal';

export default function Layout({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [exploreSpaceModalOpen, setExploreSpaceModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
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

  const handleContactSubmit = () => {
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactModalOpen(false);
    }, 3000);
  };

  const handleTrialSubmit = () => {
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setTrialModalOpen(false);
    }, 3000);
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <nav className={navClasses}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Dumbbell className="text-red-500" size={28} />
            <span className="font-bold text-xl">FORCE<span className="text-red-500">FLOW</span></span>
          </Link>
          
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/programas">Programas</NavLink>
            <NavLink href="/coaches">Coaches</NavLink>
            <NavLink href="/horarios">Horários</NavLink>
            <NavLink href="/comunidade">Comunidade</NavLink>
            <button 
              onClick={() => setTrialModalOpen(true)} 
              className="ml-4 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105"
            >
              EXPERIMENTE
            </button>
          </div>
        </div>
        
        {menuOpen && (
          <div className="lg:hidden bg-zinc-800 absolute w-full py-4 px-4 shadow-xl">
            <div className="flex flex-col gap-4">
              <NavLink 
                href="/" 
                className="py-2 border-b border-zinc-700"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                href="/programas" 
                className="py-2 border-b border-zinc-700"
                onClick={() => setMenuOpen(false)}
              >
                Programas
              </NavLink>
              <NavLink 
                href="/coaches" 
                className="py-2 border-b border-zinc-700"
                onClick={() => setMenuOpen(false)}
              >
                Coaches
              </NavLink>
              <NavLink 
                href="/horarios" 
                className="py-2 border-b border-zinc-700"
                onClick={() => setMenuOpen(false)}
              >
                Horários
              </NavLink>
              <NavLink 
                href="/comunidade" 
                className="py-2 border-b border-zinc-700"
                onClick={() => setMenuOpen(false)}
              >
                Comunidade
              </NavLink>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setTrialModalOpen(true);
                }}
                className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full font-bold text-center transition-all duration-300 hover:scale-105 mt-2"
              >
                EXPERIMENTE
              </button>
            </div>
          </div>
        )}
      </nav>
      
      <main className="pt-20">
        {children}
      </main>
      
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
                  <li><NavLink href="/" className="text-zinc-400">Home</NavLink></li>
                  <li><NavLink href="/programas" className="text-zinc-400">Programas</NavLink></li>
                  <li><NavLink href="/coaches" className="text-zinc-400">Coaches</NavLink></li>
                  <li><NavLink href="/horarios" className="text-zinc-400">Horários</NavLink></li>
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

      <Modal 
        isOpen={contactModalOpen} 
        onClose={() => {
          setContactModalOpen(false);
          setFormSubmitted(false);
        }} 
        title="Entre em Contato"
      >
        {formSubmitted ? (
          <SuccessMessage message="Sua mensagem foi enviada com sucesso! Nossa equipe entrará em contato em breve." />
        ) : (
          <ContactForm onSubmitSuccess={handleContactSubmit} />
        )}
      </Modal>

      <Modal 
        isOpen={trialModalOpen} 
        onClose={() => {
          setTrialModalOpen(false);
          setFormSubmitted(false);
        }} 
        title="Agende sua Aula Experimental"
      >
        {formSubmitted ? (
          <SuccessMessage message="Aula agendada com sucesso! Enviaremos uma confirmação por e-mail e SMS." />
        ) : (
          <TrialForm onSubmitSuccess={handleTrialSubmit} />
        )}
      </Modal>

      <ExploreSpaceModal 
        isOpen={exploreSpaceModalOpen} 
        onClose={() => setExploreSpaceModalOpen(false)} 
      />
    </div>
  );
}