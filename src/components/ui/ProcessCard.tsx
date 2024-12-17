import { useEffect, useRef, useState } from 'react';
import DevelopmentAnimation from './DevelopmentAnimation';
import GlobeAnimation from './GlobeAnimation';
import DiscoveryAnimation from './DiscoveryAnimation';

interface ProcessCardProps {
  title: string;
  description: string;
  delay?: number;
  showAnimation?: boolean;
  showGlobe?: boolean;
  showDiscovery?: boolean;
}

export default function ProcessCard({ 
  title, 
  description, 
  delay = 0,
  showAnimation = false,
  showGlobe = false,
  showDiscovery = false
}: ProcessCardProps) {
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

  return (
    <div
      ref={cardRef}
      className={`bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-[#6907be] transition-all duration-300 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Animations Section */}
      <div className="mb-6 h-[200px] flex items-center justify-center">
        {showDiscovery && <DiscoveryAnimation />}
        {showAnimation && <DevelopmentAnimation />}
        {showGlobe && <GlobeAnimation />}
      </div>

      {/* Content Section */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">
          <span className="font-bold">{title}</span>
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}