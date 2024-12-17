import { statistics } from '../../data/statistics';
import StatCard from '../ui/StatCard';

export default function Statistics() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Purple gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6907be]/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl sm:text-6xl font-bold mb-16 bg-gradient-to-r from-white to-[#6907be] bg-clip-text text-transparent">
          Our Impact
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}