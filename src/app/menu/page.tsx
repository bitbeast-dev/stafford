"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Star } from "lucide-react";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Hot Coffee", "Cold Brew", "Specialty", "Pastries"];

  const menuItems = [
    {
      id: 1,
      name: "Espresso",
      description: "Rich and bold single shot of pure Rwandan Arabica",
      category: "Hot Coffee",
      price: "RWF 2,500",
      rating: 4.9,
      image: "/E5rfidBWQAAlpe_.jfif"
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Smooth and creamy with perfectly steamed milk",
      category: "Hot Coffee",
      price: "RWF 3,500",
      rating: 4.8,
      image: "/E8AioCjXEAAEfWg.jfif"
    },
    {
      id: 3,
      name: "Latte",
      description: "Mild and sweet with velvety microfoam",
      category: "Hot Coffee",
      price: "RWF 3,000",
      rating: 4.7,
      image: "/E8AioClXIAMPrj7.jfif"
    },
    {
      id: 4,
      name: "Americano",
      description: "Classic and strong, perfect for coffee purists",
      category: "Hot Coffee",
      price: "RWF 2,800",
      rating: 4.9,
      image: "/E8AioClXoAABOJy.jfif"
    },
    {
      id: 5,
      name: "Iced Coffee",
      description: "Refreshing cold brew over ice",
      category: "Cold Brew",
      price: "RWF 3,200",
      rating: 4.8,
      image: "/E8AioCoXMAATDry.jfif"
    },
    {
      id: 6,
      name: "Rwandan Bourbon",
      description: "Chocolate, Caramel, Citrus notes from Huye District",
      category: "Specialty",
      price: "RWF 4,500",
      rating: 5.0,
      image: "/Ez4AOTrWUAELY_5.jfif"
    },
    {
      id: 7,
      name: "Virunga Blend",
      description: "Berry, Floral, Honey notes from Musanze",
      category: "Specialty",
      price: "RWF 5,000",
      rating: 5.0,
      image: "/F0q7oOSWcAMZKok.jfif"
    },
    {
      id: 8,
      name: "Lake Kivu Reserve",
      description: "Nutty, Smooth, Sweet from Karongi",
      category: "Specialty",
      price: "RWF 4,800",
      rating: 4.9,
      image: "/F1UHqHhWcAELnBL.jfif"
    }
  ];

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#4f2d1d] mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-[#32462f] max-w-3xl mx-auto playfair italic">
            Discover our carefully curated selection of premium Rwandan coffee and artisan treats
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-[#4f2d1d] text-[#e0dbd4]"
                  : "bg-white text-[#4f2d1d] border-2 border-[#4f2d1d] hover:bg-[#4f2d1d]/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-white border-[#32462f]/20 hover:scale-105 transition-transform duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-[#4f2d1d]/10 text-[#4f2d1d] text-xs rounded-full font-semibold">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#4f2d1d] fill-current" />
                    <span className="text-[#4f2d1d] text-sm font-bold">{item.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-[#4f2d1d] text-xl mb-2">{item.name}</CardTitle>
                <CardDescription className="text-[#32462f] text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#4f2d1d]">{item.price}</span>
                  <Button className="bg-[#4f2d1d] hover:bg-[#32462f] text-[#e0dbd4]">
                    Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-white rounded-2xl p-8 border-[#32462f]/20">
          <Coffee className="w-16 h-16 text-[#4f2d1d] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#4f2d1d] mb-4">
            Can't Decide? Try Our Tasting Flight
          </h2>
          <p className="text-[#32462f] mb-8 max-w-2xl mx-auto">
            Sample four of our signature single-origin coffees and discover your favorite. 
            Perfect for coffee enthusiasts wanting to explore Rwanda's diverse coffee regions.
          </p>
          <Button className="bg-gradient-to-r from-[#4f2d1d] to-[#6b3d2a] text-[#e0dbd4] font-bold px-8 py-4 text-lg rounded-full hover:scale-105 transition-transform">
            Order Tasting Flight - RWF 15,000
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
