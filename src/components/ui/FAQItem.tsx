import { Plus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <Plus 
          className={`w-5 h-5 text-[#6907be] transition-transform duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`} 
        />
      </button>
      
      <div
        className={`px-6 transition-all duration-200 ease-in-out ${
          isOpen ? 'py-4 opacity-100' : 'h-0 py-0 opacity-0'
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
}