"use client";
import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function TrialForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    experience: 'nenhuma'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      experience: 'nenhuma'
    });
    setIsSubmitting(false);
    
    if (onSubmitSuccess) onSubmitSuccess();
  };
  
  // Gerar datas disponíveis (próximos 14 dias)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Pular domingos
      if (date.getDay() === 0) continue;
      
      const formattedDate = date.toISOString().split('T')[0];
      dates.push(formattedDate);
    }
    
    return dates;
  };
  
  // Horários disponíveis
  const availableTimes = [
    '07:00', '08:00', '09:00', '17:00', '18:00', '19:00', '20:00'
  ];
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nome Completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Telefone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Data
          </label>
          <div className="relative">
            <select
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
            >
              <option value="" disabled>Escolha uma data</option>
              {getAvailableDates().map(date => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString('pt-BR')}
                </option>
              ))}
            </select>
            <Calendar size={18} className="absolute right-3 top-3.5 text-zinc-400 pointer-events-none" />
          </div>
        </div>
        
        <div>
          <label htmlFor="time" className="block text-sm font-medium mb-1">
            Horário
          </label>
          <div className="relative">
            <select
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
            >
              <option value="" disabled>Escolha um horário</option>
              {availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            <Clock size={18} className="absolute right-3 top-3.5 text-zinc-400 pointer-events-none" />
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="experience" className="block text-sm font-medium mb-1">
          Experiência Prévia
        </label>
        <select
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="nenhuma">Nenhuma experiência</option>
          <option value="iniciante">Iniciante (menos de 6 meses)</option>
          <option value="intermediario">Intermediário (6 meses a 2 anos)</option>
          <option value="avancado">Avançado (mais de 2 anos)</option>
        </select>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
      >
        {isSubmitting ? 'Agendando...' : 'Agendar Aula Experimental'}
      </button>
    </form>
  );
}
