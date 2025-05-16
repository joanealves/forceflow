import { CheckCircle } from 'lucide-react';

export default function SuccessMessage({ message }) {
  return (
    <div className="flex flex-col items-center text-center py-8">
      <div className="text-green-500 mb-4">
        <CheckCircle size={48} />
      </div>
      <h3 className="text-xl font-bold mb-2">Sucesso!</h3>
      <p className="text-zinc-300">{message}</p>
    </div>
  );
}