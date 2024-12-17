import { processes } from '../../data/processes';
import ProcessCard from '../ui/ProcessCard';

export default function Process() {
  return (
    <section id="process" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-left bg-gradient-to-r from-white to-[#6907be] bg-clip-text text-transparent">
            The process
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <ProcessCard 
              key={process.title} 
              {...process}
              delay={index * 100}
              showDiscovery={process.title.includes('Discovery')}
              showAnimation={process.title.includes('Development')}
              showGlobe={process.title.includes('Deployment')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}