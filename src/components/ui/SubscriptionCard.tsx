import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

interface SubscriptionCardProps {
  title: string;
  titleHighlight: string;
  description: string;
  features: readonly string[];
  ctaText: string;
  ctaUrl: string;
  featured?: boolean;
  delay?: number;
}

export default function SubscriptionCard({
  title,
  titleHighlight,
  description,
  features,
  ctaText,
  ctaUrl,
  featured = false,
  delay = 0
}: SubscriptionCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const baseTitle = title.substring(0, title.length - titleHighlight.length);
  
  return (
    <div
      ref={cardRef}
      className={`group relative bg-black/50 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Border with hover effect */}
      <div className="absolute inset-0 rounded-xl border transition-colors duration-300 group-hover:border-[#6907be] border-gray-800" />

      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6907be] text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}

      <div className="relative">
        <h3 className="text-2xl font-bold mb-4">
          <span className="text-white">{baseTitle}</span>
          <span className="bg-gradient-to-r from-white to-[#6907be] bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        </h3>

        <p className="text-gray-400 mb-8 h-20">{description}</p>

        <ul className="space-y-4 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-300">
              <Check className="h-5 w-5 text-[#6907be] mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 px-6 rounded-lg text-center border border-white text-white bg-transparent hover:bg-[#6907be] hover:border-[#6907be] transition-all duration-300"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}