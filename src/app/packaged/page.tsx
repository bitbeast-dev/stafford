"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    { q: "Do you really use 24K gold in coffee?", a: "Absolutely! We use certified edible 24K gold flakes imported from Switzerland. It's safe, luxurious, and creates an unforgettable Instagram moment!" },
    { q: "What makes your coffee different from others?", a: "We're the ONLY coffee shop in Africa with nitrogen infusion, volcanic stone roasting, and lightning brew technology. Plus, our beans go from farm to cup in just 48 hours!" },
    { q: "Can I watch my coffee being made?", a: "Yes! Our open-concept brewing station lets you watch the entire process. The volcanic roast experience is a live show you won't forget!" },
    { q: "Do you serve alcohol?", a: "We have a unique coffee cocktail bar - the first in Rwanda! Our espresso martinis and coffee mojitos are legendary. Must be 18+ for cocktails." },
    { q: "Are your beans really from Rwanda?", a: "100% Rwandan Arabica beans from Huye, Musanze, Karongi, and Eastern Province. We work directly with local farmers and pay them 3x fair trade prices!" },
    { q: "What's the Lightning Brew Technology?", a: "Revolutionary electromagnetic brewing that extracts perfect flavor in 30 seconds. Zero bitterness, maximum taste. It's like magic, but it's science!" },
    { q: "Can I buy beans to take home?", a: "Of course! All our single-origin beans are available for purchase. We'll even roast them fresh while you wait using our volcanic stones!" },
    { q: "Do you have WiFi and workspace?", a: "Free high-speed WiFi, comfortable seating, charging ports at every table, and a quiet work zone. Perfect for remote work or studying!" }
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#4f2d1d] text-center mb-4 pacifico">
          Coffee Questions?
        </h1>
        <p className="text-center text-[#32462f] text-lg mb-12">Everything you need to know about our unique experience</p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border-[#32462f]/20 px-6 rounded-lg">
              <AccordionTrigger className="text-[#4f2d1d] font-semibold text-lg hover:text-[#32462f] transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#32462f] leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQPage;