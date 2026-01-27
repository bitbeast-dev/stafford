"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Sparkles, Flame, Droplets, Leaf, Zap } from "lucide-react";

const TestimonialsPage = () => {
  const experiences = [
    { icon: Coffee, title: "24K Gold Coffee", description: "Yes, REAL edible gold flakes in your coffee! Experience luxury in every sip. Rwanda's ONLY gold-infused coffee.", image: "/FGKPFWmXMAQpsO3.jfif", price: "RWF 15,000" },
    { icon: Flame, title: "Volcanic Roast Experience", description: "Watch your beans roasted LIVE using volcanic stones from Mount Nyiragongo. A theatrical coffee experience!", image: "/FGKPFWqWQAMUdT0.jfif", price: "RWF 8,000" },
    { icon: Droplets, title: "Nitrogen Cold Brew", description: "Cascading, creamy, smooth - infused with pure nitrogen for a velvety texture that melts on your tongue.", image: "/FGKPFWxXIAIKdyj.jfif", price: "RWF 6,500" },
    { icon: Sparkles, title: "Coffee Cocktail Bar", description: "World's first coffee-based cocktails in Rwanda! Espresso Martini, Coffee Mojito, and our signature Kigali Sunset.", image: "/Fg-aW6-XoAAP9lk.jfif", price: "RWF 12,000" },
    { icon: Leaf, title: "Farm-to-Cup in 48 Hours", description: "From our partner farms to your cup in just 2 days. The freshest coffee experience in Africa!", image: "/Fg-aW63XwAE7X5Y.jfif", price: "RWF 5,500" },
    { icon: Zap, title: "Lightning Brew Technology", description: "Revolutionary 30-second brewing using electromagnetic pulses. Perfect extraction, zero bitterness!", image: "/Fg-aW67XgAAL0W3.jfif", price: "RWF 7,000" }
  ];

  return (
    <div className="bg-transparent py-8 md:py-16 px-2 md:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#4f2d1d] text-center mb-3 md:mb-4 pacifico">
          Shocking Coffee Experiences
        </h1>
        <p className="text-center text-[#32462f] text-lg md:text-xl mb-8 md:mb-12">Africa's Most Innovative Coffee Shop</p>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card key={index} className="bg-white border-[#32462f]/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 md:h-56 overflow-hidden relative">
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#4f2d1d] text-[#e0dbd4] px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">
                    {exp.price}
                  </div>
                </div>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-2 md:mb-3">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[#4f2d1d] mr-2 md:mr-3" />
                    <h3 className="text-[#4f2d1d] font-bold text-lg md:text-xl">{exp.title}</h3>
                  </div>
                  <p className="text-[#32462f] leading-relaxed text-sm md:text-base">{exp.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;