import { features } from '../../data/features';
import FeatureCard from '../ui/FeatureCard';

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-left bg-gradient-to-r from-white to-[#6907be] bg-clip-text text-transparent">
            What we do
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              {...feature}
              delay={index * 100} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}