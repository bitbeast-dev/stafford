'use client';

import { Restaurant } from '@/types/restaurant';
import Image from 'next/image';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onSelect: (restaurant: Restaurant) => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onSelect }) => {
  return (
    <div 
      className="bg-[#031736] text-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => onSelect(restaurant)}
    >
      <div className="relative h-48 w-full bg-[#031736]">
        <Image
          src="/4.png"
          alt={restaurant.name}
          fill
          className="object-cover"
        />
        {!restaurant.isOpen && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Closed</span>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-[#031736]">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-white">{restaurant.name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-white ml-1">{restaurant.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-white mb-2">{restaurant.cuisine}</p>
        <p className="text-xs text-white mb-3 line-clamp-2">{restaurant.description}</p>
        
        <div className="flex justify-between items-center text-white">
          <span className='text-[#d7a13e]'>{restaurant.deliveryTime}</span>
          <span>{restaurant.deliveryFee} RWF delivery</span>
        </div>
        
        <div className="mt-2 text-xs text-white">
          Min. order: {restaurant.minOrder} RWF
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
