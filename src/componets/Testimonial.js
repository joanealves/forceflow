export default function Testimonial({ name, position, image, text }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-zinc-400 text-sm">{position}</p>
        </div>
      </div>
      <p className="text-zinc-300 italic">"{text}"</p>
    </div>
  );
}