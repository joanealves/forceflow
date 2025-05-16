export default function CoachCard({ name, specialty, image, instagram }) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden group hover:scale-105 transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-red-500 font-medium mb-3">{specialty}</p>
        <a 
          href={`https://instagram.com/${instagram}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 inline-flex items-center gap-2 font-bold text-zinc-400 hover:text-white transition-colors"
        >
          @{instagram}
        </a>
      </div>
    </div>
  );
}