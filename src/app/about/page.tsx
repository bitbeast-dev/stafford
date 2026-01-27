"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Award, Heart, ArrowRight, MapPin } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "100%", label: "Rwandan Arabica", icon: Coffee },
    { number: "50+", label: "Coffee Varieties", icon: Coffee },
    { number: "24/7", label: "Always Open", icon: Heart }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We source only the finest Rwandan Arabica beans from local farmers, ensuring every cup meets our high standards.",
      icon: Award
    },
    {
      title: "Community Focus",
      description: "Supporting local coffee farmers and creating a welcoming space for our community to gather and connect.",
      icon: Heart
    },
    {
      title: "Innovation",
      description: "Blending traditional Rwandan coffee culture with modern brewing techniques and innovative flavors.",
      icon: Coffee
    },
    {
      title: "Sustainability",
      description: "Committed to environmentally friendly practices and fair trade partnerships with local farmers.",
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#4f2d1d] mb-6">
            About Stafford Coffee
          </h1>
          <p className="text-xl text-[#32462f] max-w-4xl mx-auto leading-relaxed playfair italic">
            Born from a passion for exceptional coffee and Rwandan heritage, Stafford Coffee has been 
            serving the finest coffee experience in Kigali since our founding. We're more than just a 
            coffee shop - we're a celebration of Rwanda's rich coffee culture and a gathering place for 
            coffee lovers from around the world.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-white border-[#32462f]/20 text-center hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <IconComponent className="w-8 h-8 text-[#4f2d1d] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#4f2d1d] mb-2">{stat.number}</div>
                  <div className="text-[#32462f] text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white border-[#32462f]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-[#4f2d1d] flex items-center gap-2">
                <Coffee className="w-6 h-6 text-[#4f2d1d]" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#32462f] leading-relaxed">
                To showcase the exceptional quality of Rwandan coffee to the world while creating 
                an innovative, welcoming space where coffee culture thrives. We're committed to 
                supporting local farmers and delivering an unforgettable coffee experience with 
                every cup we serve.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-[#32462f]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-[#4f2d1d] flex items-center gap-2">
                <Award className="w-6 h-6 text-[#4f2d1d]" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#32462f] leading-relaxed">
                To become Africa's most innovative coffee destination, setting new standards for 
                quality, service, and community engagement. We envision a future where Rwandan 
                coffee is celebrated globally, and Stafford Coffee is synonymous with excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#4f2d1d] mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-white border-[#32462f]/20 text-center hover:scale-105 transition-transform">
                  <CardContent className="p-6">
                    <IconComponent className="w-12 h-12 text-[#4f2d1d] mx-auto mb-4" />
                    <h3 className="text-[#4f2d1d] font-semibold text-lg mb-3">{value.title}</h3>
                    <p className="text-[#32462f] text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl p-8 mb-16 border-[#32462f]/20">
          <h2 className="text-3xl font-bold text-center text-[#4f2d1d] mb-6">Our Story</h2>
          <div className="max-w-4xl mx-auto text-[#32462f] leading-relaxed space-y-4">
            <p>
              Stafford Coffee began with a simple dream: to create a space where the exceptional 
              quality of Rwandan coffee could shine. From the volcanic soils of Rwanda's highlands 
              to our carefully crafted brews, every cup tells a story of passion, tradition, and 
              innovation.
            </p>
            <p>
              We work directly with local coffee farmers across Rwanda's premier growing regions - 
              from Huye to Musanze, from Karongi to the Eastern Province. These partnerships ensure 
              not only the highest quality beans but also fair compensation and sustainable practices 
              that benefit our entire community.
            </p>
            <p>
              Today, Stafford Coffee stands as more than just a coffee shop. We're a cultural hub, 
              an art gallery, a workspace, and a gathering place for coffee enthusiasts from around 
              the world. Open 24/7, we're here whenever you need that perfect cup of coffee.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#4f2d1d] mb-4">
            Experience the Difference
          </h2>
          <p className="text-[#32462f] mb-8 max-w-2xl mx-auto">
            Visit us today and discover why Stafford Coffee is Kigali's premier coffee destination. 
            Your perfect cup awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-[#4f2d1d] to-[#6b3d2a] text-[#e0dbd4] font-bold px-8 py-4 text-lg rounded-full hover:scale-105 transition-transform">
              Order Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="bg-transparent text-[#4f2d1d] border-2 border-[#4f2d1d] font-bold px-8 py-4 text-lg rounded-full hover:bg-[#4f2d1d]/10 transition-all">
              Visit Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
