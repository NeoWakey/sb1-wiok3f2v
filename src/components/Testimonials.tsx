const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    content: 'Hero.AI transformed our customer service operations. The AI chatbot they implemented has reduced response times by 80% while maintaining high customer satisfaction.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateLabs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    content: 'The workflow automation solutions provided by Hero.AI have significantly improved our productivity. Their team has unmatched expertise in AI integration.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Director, GlobalTech',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    content: 'Working with Hero.AI has been a game-changer for our business. Their AI solutions have helped us stay ahead of the competition and improve our bottom line.'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}