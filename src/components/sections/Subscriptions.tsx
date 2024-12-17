import { subscriptionPlans } from '../../data/subscriptions';
import SubscriptionCard from '../ui/SubscriptionCard';

export default function Subscriptions() {
  return (
    <section id="subscriptions" className="py-20 bg-black relative">
      {/* Purple gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6907be]/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-white to-[#6907be] bg-clip-text text-transparent">
            Subscriptions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan, index) => (
            <SubscriptionCard 
              key={plan.title} 
              {...plan} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}