import { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

interface TestimonialSliderProps {
  testimonials: typeof import('../../data/testimonials').testimonials;
  direction: 'left' | 'right';
}

export default function TestimonialSlider({ testimonials, direction }: TestimonialSliderProps) {
  const [position, setPosition] = useState(0);
  
  // Double the testimonials to create seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  
  useEffect(() => {
    const animate = () => {
      setPosition(prev => {
        const newPosition = direction === 'left' 
          ? prev - 0.5 
          : prev + 0.5;
        
        // Reset position when reaching the end
        if (Math.abs(newPosition) >= 100) {
          return 0;
        }
        return newPosition;
      });
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="flex gap-8 absolute w-[200%]"
        style={{
          transform: `translateX(${position}%)`,
          transition: 'transform 0.05s linear'
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div 
            key={`${testimonial.name}-${index}`}
            className="w-[350px] flex-shrink-0"
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}