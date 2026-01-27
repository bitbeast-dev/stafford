"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Heart, Award, Users } from "lucide-react";

const InternshipsPage = () => {
  const milestones = [
    {
      year: "2008",
      title: "The Beginning",
      description: "Scafford Coffee opened its doors in Kigali with a simple mission: to showcase Rwanda's exceptional coffee to the world.",
      icon: Coffee
    },
    {
      year: "2012",
      title: "Community Growth",
      description: "Expanded partnerships with local farmers across Rwanda's premier coffee regions, ensuring fair trade and sustainable practices.",
      icon: Users
    },
    {
      year: "2016",
      title: "Innovation Hub",
      description: "Transformed into a 24/7 cultural destination featuring art gallery, coffee library, and workspace for the community.",
      icon: Heart
    },
    {
      year: "2024",
      title: "Award Recognition",
      description: "Recognized as Africa's most innovative coffee shop, setting new standards for quality and community engagement.",
      icon: Award
    }
  ];

  const values = [
    {
      title: "From Soil to Cup",
      description: "Every bean tells a story. We work directly with farmers in Huye, Musanze, Karongi, and Eastern Province, ensuring each harvest meets our exacting standards while supporting local communities.",
      image: "/FGKPFWmXMAQpsO3.jfif"
    },
    {
      title: "Crafted with Passion",
      description: "Our baristas are trained in both traditional Rwandan coffee preparation and modern brewing techniques, creating a perfect blend of heritage and innovation in every cup.",
      image: "/FGKPFWqWQAMUdT0.jfif"
    },
    {
      title: "A Gathering Place",
      description: "More than a coffee shop, Scafford is where culture thrives. From art exhibitions to coffee tastings, we create experiences that bring people together.",
      image: "/FGKPFWxXIAIKdyj.jfif"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#4f2d1d] mb-6">
            Our Story
          </h1>
          <p className="text-xl text-[#32462f] max-w-4xl mx-auto leading-relaxed playfair italic">
            From a small coffee shop to Rwanda's premier coffee destination, our journey has been 
            fueled by passion, community, and an unwavering commitment to excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#4f2d1d] mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <Card key={index} className="bg-white border-[#32462f]/20 hover:scale-105 transition-transform">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#4f2d1d] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-[#e0dbd4]" />
                    </div>
                    <div className="text-2xl font-bold text-[#4f2d1d] mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-bold text-[#4f2d1d] mb-3">{milestone.title}</h3>
                    <p className="text-[#32462f] text-sm leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#4f2d1d] mb-12">What Makes Us Special</h2>
          <div className="space-y-8">
            {values.map((value, index) => (
              <Card key={index} className={`bg-white border-[#32462f]/20 overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:flex">
                  <div className="md:w-1/2 h-64 md:h-auto">
                    <img src={value.image} alt={value.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#4f2d1d] mb-4">{value.title}</h3>
                    <p className="text-[#32462f] leading-relaxed">{value.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-[#32462f] to-[#4f2d1d] rounded-2xl p-8 md:p-12 text-center">
          <Coffee className="w-16 h-16 text-[#e0dbd4] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#e0dbd4] mb-6">
            Our Commitment
          </h2>
          <p className="text-[#e0dbd4] text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Every cup we serve represents our commitment to quality, sustainability, and community. 
            From supporting local farmers with fair wages to creating a space where culture and 
            connection flourish, we're dedicated to making a positive impact one coffee at a time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#e0dbd4] mb-2">100%</div>
              <div className="text-[#e0dbd4]/80">Rwandan Arabica</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#e0dbd4] mb-2">50+</div>
              <div className="text-[#e0dbd4]/80">Partner Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#e0dbd4] mb-2">24/7</div>
              <div className="text-[#e0dbd4]/80">Always Open</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipsPage;
