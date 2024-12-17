import { COMPANY_NAME, CALENDLY_URL } from '../../utils/constants';
import Button from '../ui/Button';
import Typewriter from '../ui/Typewriter';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <Typewriter 
            text={COMPANY_NAME}
            className="bg-gradient-to-r from-white to-[#6907be] bg-clip-text text-transparent"
            delay={100}
          />
        </h1>
        <div className="h-8 mb-8">
          <Typewriter 
            text="Empowering companies with smarter AI solutions"
            className="text-xl text-gray-300"
            delay={50}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#process">The Process</Button>
          <Button href={CALENDLY_URL} variant="outline" external>Book your call</Button>
        </div>
      </div>
    </section>
  );
}