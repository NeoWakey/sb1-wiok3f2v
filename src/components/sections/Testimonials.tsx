import { testimonials } from '../../data/testimonials';
import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-6xl sm:text-7xl font-bold mb-16 bg-gradient-to-r from-white to-[#6907be] bg-clip-text text-transparent">
          What our clients say
        </h2>
        
        <div className="relative">
          <div className="flex gap-6 animate-slide-left">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}