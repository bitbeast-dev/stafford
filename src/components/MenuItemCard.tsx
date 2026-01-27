'use client';

import { MenuItem, OrderItem } from '@/types/restaurant';
import Image from 'next/image';
import { useState } from 'react';

interface MenuItemCardProps {
  menuItem: MenuItem;
  onAddToCart: (orderItem: OrderItem) => void;
  cartQuantity?: number;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ 
  menuItem, 
  onAddToCart, 
  cartQuantity = 0 
}) => {
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleAddToCart = () => {
    const orderItem: OrderItem = {
      menuItem,
      quantity,
      specialInstructions: specialInstructions.trim() || undefined
    };
    onAddToCart(orderItem);
    setQuantity(1);
    setSpecialInstructions('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src="/4.png"
            alt={menuItem.name}
            fill
            className="object-cover"
          />
          {!menuItem.isAvailable && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white text-xs font-semibold">Out</span>
            </div>
          )}
        </div>
        
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-base font-semibold text-gray-900">{menuItem.name}</h4>
            <span className="text-lg font-bold text-green-600">{menuItem.price} RWF</span>
          </div>
          
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{menuItem.description}</p>
          
          {menuItem.allergens && menuItem.allergens.length > 0 && (
            <p className="text-xs text-red-500 mb-2">
              Contains: {menuItem.allergens.join(', ')}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              {showDetails ? 'Hide details' : 'Show details'}
            </button>
            
            {cartQuantity > 0 && (
              <span className="text-sm text-green-600 font-medium">
                {cartQuantity} in cart
              </span>
            )}
          </div>
        </div>
      </div>
      
      {showDetails && (
        <div className="px-4 pb-4 border-t border-gray-100">
          {menuItem.ingredients && (
            <div className="mb-3">
              <h5 className="text-sm font-medium text-gray-700 mb-1">Ingredients:</h5>
              <p className="text-xs text-gray-600">{menuItem.ingredients.join(', ')}</p>
            </div>
          )}
          
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity:
            </label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300"
                disabled={!menuItem.isAvailable}
              >
                -
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300"
                disabled={!menuItem.isAvailable}
              >
                +
              </button>
            </div>
          </div>
          
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special Instructions (optional):
            </label>
            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="Any special requests..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
              disabled={!menuItem.isAvailable}
            />
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!menuItem.isAvailable}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
          >
            {menuItem.isAvailable ? `Add to Cart - ${(menuItem.price * quantity).toFixed(0)} RWF` : 'Not Available'}
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuItemCard;
