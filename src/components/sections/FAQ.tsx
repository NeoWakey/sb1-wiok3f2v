import { useState } from 'react';
import { faqItems } from '../../data/faq';
import FAQItem from '../ui/FAQItem';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="answers" className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold">
            <span className="text-white">Ans</span>
            <span className="bg-gradient-to-r from-white to-[#6907be]/70 bg-clip-text text-transparent">wers</span>
          </h2>
          <p className="mt-4 text-gray-400">
            We have gone ahead and answered some of the questions you may have
          </p>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}