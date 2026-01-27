import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Wifi, Music, BookOpen, Palette, Twitter, Instagram } from "lucide-react";

const PartnersPage = () => {
  const amenities = [
    { icon: Users, name: "Private Coffee Tasting Room", description: "Book our VIP room for exclusive tastings. Holds up to 12 people.", image: "/FiacTIyX0AIKkUq.jfif" },
    { icon: Wifi, name: "Gigabit WiFi", description: "Fastest internet in Kigali. Stream, work, game - no limits!", image: "/FjJZvtAWIAg83dx.jfif" },
    { icon: BookOpen, name: "Coffee Library", description: "1000+ books about coffee, Rwanda, and culture. Read while you sip.", image: "/FkVTmxfWAAEFHe5.jfif" },
    { icon: Palette, name: "Art Gallery", description: "Rotating exhibitions from Rwandan artists. All art is for sale!", image: "/FkVTmxkWYAANqz4.jfif" }
  ];

  return (
    <div className="bg-transparent py-8 md:py-16 px-2 md:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#4f2d1d] text-center mb-3 md:mb-4 pacifico">
          More Than Just Coffee
        </h1>
        <p className="text-[#32462f] text-center mb-8 md:mb-12 text-lg md:text-xl">
          A complete cultural experience awaits you
        </p>
        
        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-16">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            const sizes = [
              'col-span-2 row-span-2',
              'col-span-2 md:col-span-1 row-span-1', 
              'col-span-2 md:col-span-1 row-span-1',
              'col-span-2 row-span-1'
            ];
            return (
              <Card key={index} className={`${sizes[index]} bg-white border-[#32462f]/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden group min-h-[200px] md:min-h-[250px]`}>
                <div className="h-full flex flex-col">
                  <div className={`${index === 0 ? 'h-2/3' : index === 3 ? 'h-1/2' : 'h-32'} overflow-hidden relative`}>
                    <img src={amenity.image} alt={amenity.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardContent className={`${index === 0 ? 'p-4 md:p-6' : 'p-3 md:p-4'} flex-1 flex flex-col justify-center text-center`}>
                    <IconComponent className={`${index === 0 ? 'w-10 h-10 md:w-12 md:h-12' : 'w-6 h-6 md:w-8 md:h-8'} text-[#4f2d1d] mx-auto mb-1 md:mb-2`} />
                    <h3 className={`text-[#4f2d1d] font-bold ${index === 0 ? 'text-base md:text-xl' : 'text-sm md:text-base'} mb-1`}>{amenity.name}</h3>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-r from-[#32462f] to-[#4f2d1d] border-none shadow-2xl overflow-hidden">
          <CardContent className="p-6 md:p-12 text-center relative">
            <div className="absolute inset-0 opacity-10">
              <img src="/FkVTmxlXwAESHQ-.jfif" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-[#e0dbd4] mb-3 md:mb-4 pacifico">Visit Us Today!</h2>
              <p className="text-[#e0dbd4] mb-4 md:mb-6 text-base md:text-lg max-w-2xl mx-auto">
                Experience Africa's most innovative coffee shop. Located in the heart of Kigali, Rwanda.
              </p>
              <p className="text-[#e0dbd4]/90 mb-6 md:mb-8 text-base md:text-xl font-bold flex items-center justify-center gap-6">
                <a href="https://twitter.com/Stafford_Coffee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#4f2d1d] transition-colors">
                  <Twitter className="w-5 h-5" /> @Stafford_Coffee
                </a>
                <a href="https://instagram.com/staffordru" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#4f2d1d] transition-colors">
                  <Instagram className="w-5 h-5" /> staffordru
                </a>
              </p>
              <Button className="bg-[#e0dbd4] text-[#4f2d1d] font-bold px-6 md:px-10 py-4 md:py-6 text-base md:text-lg hover:bg-white hover:scale-105 transition-all rounded-full">
                Get Directions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnersPage;