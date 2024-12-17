import { useEffect, useState } from 'react';
import { Search, Mail, Database, FileCode, Settings, Cloud, Layout, BarChart } from 'lucide-react';

const icons = [Search, Mail, Database, FileCode, Settings, Cloud, Layout, BarChart];

export default function DiscoveryAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % (icons.length * 2)); // Double length to create pause
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3 p-2">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className={`p-2 rounded-lg transition-all duration-300 ${
            index === activeIndex % icons.length
              ? 'bg-[#6907be]/20 scale-110'
              : 'bg-gray-800/50'
          }`}
        >
          <Icon
            className={`h-5 w-5 transition-colors duration-300 ${
              index === activeIndex % icons.length
                ? 'text-[#6907be]'
                : 'text-gray-500'
            }`}
          />
        </div>
      ))}
    </div>
  );
}