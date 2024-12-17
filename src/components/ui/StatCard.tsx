import { useEffect, useRef, useState } from 'react';
import CountUp from './CountUp';

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
  delay?: number;
}

export default function StatCard({ value, suffix, label, description, delay = 0 }: StatCardProps) {
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
      className={`bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mb-4">
        <span className="text-5xl font-bold bg-gradient-to-r from-white to-[#6907be] bg-clip-text text-transparent">
          {isVisible ? <CountUp end={value} suffix={suffix} /> : '0'}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{label}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}