"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Heart, Award, Clock, MapPin, Star } from "lucide-react";

import TestimonialsPage from "./menu/page";
import FAQPage from "./menu/page";
import PartnersPage from "./delivered/page";
import Link from "next/link";
import InternshipModal from "@/components/InternshipModal";

export default function Page() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/FGKPFWmXMAQpsO3.jfif",
    "/FGKPFWqWQAMUdT0.jfif",
    "/FGKPFWxXIAIKdyj.jfif",
    "/Fg-aW6-XoAAP9lk.jfif",
    "/Fg-aW63XwAE7X5Y.jfif",
    "/Fg-aW67XgAAL0W3.jfif"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  const features = [
    { icon: Coffee, title: "Premium Beans", description: "100% Rwandan Arabica" },
    { icon: Heart, title: "Crafted with Love", description: "Every cup tells a story" },
    { icon: Award, title: "Award Winning", description: "Best coffee in Rwanda" },
    { icon: Clock, title: "Fresh Daily", description: "Roasted every morning" },
    { icon: MapPin, title: "Local Sourced", description: "Supporting local farmers" },
    { icon: Star, title: "5-Star Rated", description: "Loved by thousands" }
  ];

  const coffeeImages = [
    "/E5rfidBWQAAlpe_.jfif",
    "/E8AioCjXEAAEfWg.jfif",
    "/E8AioClXIAMPrj7.jfif",
    "/E8AioClXoAABOJy.jfif",
    "/E8AioCoXMAATDry.jfif",
    "/Ez4AOTrWUAELY_5.jfif",
    "/F0q7oOSWcAMZKok.jfif",
    "/F1UHqHhWcAELnBL.jfif"
  ];

  const coffees = [
    { title: "Espresso", description: "Rich & Bold", price: "RWF 2,500", image: coffeeImages[0] },
    { title: "Cappuccino", description: "Smooth & Creamy", price: "RWF 3,500", image: coffeeImages[1] },
    { title: "Latte", description: "Mild & Sweet", price: "RWF 3,000", image: coffeeImages[2] },
    { title: "Americano", description: "Classic & Strong", price: "RWF 2,800", image: coffeeImages[3] }
  ];

  const specialties = [
    { name: "Rwandan Bourbon", origin: "Huye District", notes: "Chocolate, Caramel, Citrus", price: "RWF 4,500", image: coffeeImages[4] },
    { name: "Virunga Blend", origin: "Musanze", notes: "Berry, Floral, Honey", price: "RWF 5,000", image: coffeeImages[5] },
    { name: "Lake Kivu Reserve", origin: "Karongi", notes: "Nutty, Smooth, Sweet", price: "RWF 4,800", image: coffeeImages[6] },
    { name: "Akagera Sunrise", origin: "Eastern Province", notes: "Bright, Fruity, Bold", price: "RWF 4,200", image: coffeeImages[7] }
  ];

  return (
    <div className="min-h-screen bg-[#e0dbd4] flex flex-col animate-in fade-in duration-2000">
      {/* Hero Section */}
      <div className="relative w-screen h-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative w-full h-full overflow-hidden">
          {heroImages.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt="Coffee" 
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#32462f]/90 via-[#32462f]/50 to-transparent flex flex-col items-center justify-center z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold text-[#e0dbd4] mb-4 pacifico animate-in slide-in-from-top duration-1500">
              Stafford Coffee
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-center text-[#e0dbd4] mb-8 animate-in slide-in-from-bottom duration-1500 delay-300">
              Rwanda&apos;s Finest Coffee Experience
            </p>
            <p className="text-lg text-[#e0dbd4]/90 text-center max-w-2xl px-4 mb-8">
              From the volcanic soils of Rwanda to your cup - Experience coffee crafted with passion, tradition, and excellence
            </p>
            <Link href="/learn">
              <Button className="bg-[#4f2d1d] text-[#e0dbd4] font-bold px-10 py-6 text-lg rounded-full hover:bg-[#32462f] hover:scale-105 transition-all shadow-xl">
                Order Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-4 lg:px-8 overflow-x-hidden">
        {/* Features Grid - Bento Grid */}
        <div className="flex flex-col items-center justify-start w-full max-w-7xl mx-auto my-8 md:my-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-12 gap-2 md:gap-4 w-full">
            <Card className={`col-span-2 md:col-span-4 row-span-2 bg-white border-[#32462f]/20 transition-all duration-500 hover:scale-105 hover:shadow-lg ${
              activeFeature === 0 ? 'ring-2 ring-[#4f2d1d] bg-[#32462f]/10' : ''
            }`}>
              <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
                <Coffee className="w-16 h-16 text-[#4f2d1d] mb-4" />
                <CardTitle className="text-lg text-[#4f2d1d] mb-2">{features[0].title}</CardTitle>
                <p className="text-sm text-[#32462f]">{features[0].description}</p>
              </CardContent>
            </Card>
            <Card className={`col-span-2 md:col-span-4 bg-white border-[#32462f]/20 transition-all duration-500 hover:scale-105 hover:shadow-lg ${
              activeFeature === 1 ? 'ring-2 ring-[#4f2d1d] bg-[#32462f]/10' : ''
            }`}>
              <CardContent className="p-4 h-full flex flex-col justify-center items-center text-center">
                <Heart className="w-12 h-12 text-[#4f2d1d] mb-2" />
                <CardTitle className="text-sm text-[#4f2d1d] mb-1">{features[1].title}</CardTitle>
                <p className="text-xs text-[#32462f]">{features[1].description}</p>
              </CardContent>
            </Card>
            <Card className={`col-span-2 md:col-span-4 bg-white border-[#32462f]/20 transition-all duration-500 hover:scale-105 hover:shadow-lg ${
              activeFeature === 2 ? 'ring-2 ring-[#4f2d1d] bg-[#32462f]/10' : ''
            }`}>
              <CardContent className="p-4 h-full flex flex-col justify-center items-center text-center">
                <Award className="w-12 h-12 text-[#4f2d1d] mb-2" />
                <CardTitle className="text-sm text-[#4f2d1d] mb-1">{features[2].title}</CardTitle>
                <p className="text-xs text-[#32462f]">{features[2].description}</p>
              </CardContent>
            </Card>
            <Card className={`col-span-2 md:col-span-3 bg-white border-[#32462f]/20 transition-all duration-500 hover:scale-105 hover:shadow-lg ${
              activeFeature === 3 ? 'ring-2 ring-[#4f2d1d] bg-[#32462f]/10' : ''
            }`}>
              <CardContent className="p-4 h-full flex flex-col justify-center items-center text-center">
                <Clock className="w-10 h-10 text-[#4f2d1d] mb-2" />
                <CardTitle className="text-xs text-[#4f2d1d] mb-1">{features[3].title}</CardTitle>
                <p className="text-[10px] text-[#32462f]">{features[3].description}</p>
              </CardContent>
            </Card>
            <Card className={`col-span-2 md:col-span-3 bg-white border-[#32462f]/20 transition-all duration-500 hover:scale-105 hover:shadow-lg ${
              activeFeature === 4 ? 'ring-2 ring-[#4f2d1d] bg-[#32462f]/10' : ''
            }`}>
              <CardContent className="p-4 h-full flex flex-col justify-center items-center text-center">
                <MapPin className="w-10 h-10 text-[#4f2d1d] mb-2" />
                <CardTitle className="text-xs text-[#4f2d1d] mb-1">{features[4].title}</CardTitle>
                <p className="text-[10px] text-[#32462f]">{features[4].description}</p>
              </CardContent>
            </Card>
            <Card className={`col-span-2 md:col-span-2 bg-white border-[#32462f]/20 transition-all duration-500 hover:scale-105 hover:shadow-lg ${
              activeFeature === 5 ? 'ring-2 ring-[#4f2d1d] bg-[#32462f]/10' : ''
            }`}>
              <CardContent className="p-4 h-full flex flex-col justify-center items-center text-center">
                <Star className="w-10 h-10 text-[#4f2d1d] mb-2" />
                <CardTitle className="text-xs text-[#4f2d1d] mb-1">{features[5].title}</CardTitle>
                <p className="text-[10px] text-[#32462f]">{features[5].description}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Popular Coffees Section - Masonry Grid */}
        <div className="w-full max-w-7xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#4f2d1d] mb-3 md:mb-4 pacifico">
            Our Signature Drinks
          </h2>
          <p className="text-center text-[#32462f] mb-6 md:mb-8 text-base md:text-lg">Handcrafted perfection in every cup</p>
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {coffees.map((coffee, index) => (
              <Card key={index} className="bg-white border-[#32462f]/20 hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden break-inside-avoid mb-3 md:mb-4">
                <div className={`${index % 2 === 0 ? 'h-64' : 'h-48'} overflow-hidden relative`}>
                  <img src={coffee.image} alt={coffee.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <CardHeader className="pb-2 md:pb-3">
                  <CardTitle className="text-[#4f2d1d] text-base md:text-lg">{coffee.title}</CardTitle>
                  <CardDescription className="text-[#32462f] text-xs md:text-sm">
                    {coffee.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-3 md:pb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg md:text-xl font-bold text-[#32462f]">{coffee.price}</span>
                    <Link href="/learn">
                      <Button size="sm" className="bg-[#4f2d1d] hover:bg-[#32462f] text-[#e0dbd4]">
                        Order
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specialty Coffee Section - Card Grid */}
        <div className="w-full max-w-7xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#4f2d1d] mb-3 md:mb-4 pacifico">
            Rwandan Single Origin
          </h2>
          <p className="text-center text-[#32462f] mb-6 md:mb-8 text-base md:text-lg">Discover the unique flavors of Rwanda's coffee regions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="bg-white border-[#32462f]/20 hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden group">
                <div className="h-48 md:h-64 relative overflow-hidden">
                  <img src={specialty.image} alt={specialty.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#4f2d1d] text-[#e0dbd4] px-3 py-1 md:px-4 md:py-2 rounded-full font-bold shadow-lg text-sm md:text-base">
                    {specialty.price}
                  </div>
                </div>
                <CardContent className="p-4 md:p-6">
                  <CardTitle className="text-[#4f2d1d] text-lg md:text-xl mb-2">{specialty.name}</CardTitle>
                  <CardDescription className="text-[#32462f] flex items-center mb-2 md:mb-3 text-sm md:text-base">
                    <MapPin className="w-4 h-4 mr-1" />
                    {specialty.origin}
                  </CardDescription>
                  <p className="text-[#32462f] mb-3 md:mb-4 italic text-xs md:text-sm">{specialty.notes}</p>
                  <Button 
                    className="bg-[#4f2d1d] hover:bg-[#32462f] text-[#e0dbd4] w-full text-sm md:text-base py-2 md:py-3"
                    onClick={() => {
                      setSelectedInternship(specialty.name);
                      setIsModalOpen(true);
                    }}
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <TestimonialsPage />
        <FAQPage />
        <PartnersPage />
      </div>
      
      <InternshipModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        internshipTitle={selectedInternship}
      />
    </div>
  );
}
