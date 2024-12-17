interface TestimonialCardProps {
  quote: string;
  description: string;
  author: string;
  role: string;
  logo: string;
  logoUrl: string;
}

export default function TestimonialCard({ quote, description, author, role, logo, logoUrl }: TestimonialCardProps) {
  return (
    <div className="w-[400px] flex-shrink-0 bg-black border border-gray-800 rounded-xl p-6 hover:border-[#6907be] transition-colors duration-300">
      <div className="mb-4">
        <p className="text-xl font-semibold text-white mb-4">{quote}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img 
            src={logoUrl} 
            alt={`${logo} logo`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium text-white">{author}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}