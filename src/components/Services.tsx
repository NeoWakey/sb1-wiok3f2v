import { Bot, Brain, MessageSquare, Settings } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Seamlessly integrate AI solutions into your existing business processes for enhanced efficiency and innovation.'
  },
  {
    icon: Settings,
    title: 'Workflow Automation',
    description: 'Streamline your operations with intelligent automation that reduces manual tasks and increases productivity.'
  },
  {
    icon: MessageSquare,
    title: 'Chatbot Development',
    description: 'Create sophisticated AI-powered chatbots that provide 24/7 customer support and engagement.'
  },
  {
    icon: Bot,
    title: 'Business Consulting',
    description: 'Expert guidance on implementing AI strategies that drive growth and competitive advantage.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how our AI-powered solutions can transform your business operations
            and drive unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-colors"
            >
              <service.icon className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}