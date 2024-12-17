import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WhatWeDo from './components/sections/WhatWeDo';
import Process from './components/sections/Process';
import Statistics from './components/sections/Statistics';
import Testimonials from './components/sections/Testimonials';
import Subscriptions from './components/sections/Subscriptions';
import FAQ from './components/sections/FAQ';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Process />
        <Statistics />
        <Subscriptions />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}