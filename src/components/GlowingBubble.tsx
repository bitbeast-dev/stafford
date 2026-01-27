import React from 'react';

interface GlowingBubbleProps {
  variant?: 'blue' | 'cyan' | 'purple';
  children?: React.ReactNode;
}

const GlowingBubble: React.FC<GlowingBubbleProps> = ({ variant = 'blue', children }) => {
  const variants = {
    blue: {
      background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 15%, transparent 25%), radial-gradient(circle at 30% 30%, #00BFFF 0%, #007BFF 70%, #003d7a 100%)',
      boxShadow: '0 0 20px 5px rgba(0, 191, 255, 0.6), 0 0 40px 10px rgba(0, 191, 255, 0.3), inset -30px -30px 60px rgba(0, 0, 0, 0.3), inset 20px 20px 40px rgba(255, 255, 255, 0.1)'
    },
    cyan: {
      background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 15%, transparent 25%), radial-gradient(circle at 30% 30%, #00FFFF 0%, #00BFFF 70%, #007BFF 100%)',
      boxShadow: '0 0 20px 5px rgba(0, 255, 255, 0.6), 0 0 40px 10px rgba(0, 255, 255, 0.3), inset -30px -30px 60px rgba(0, 0, 0, 0.3), inset 20px 20px 40px rgba(255, 255, 255, 0.1)'
    },
    purple: {
      background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 15%, transparent 25%), radial-gradient(circle at 30% 30%, #FF00FF 0%, #A020F0 70%, #4B0082 100%)',
      boxShadow: '0 0 20px 5px rgba(255, 0, 255, 0.6), 0 0 40px 10px rgba(255, 0, 255, 0.3), inset -30px -30px 60px rgba(0, 0, 0, 0.3), inset 20px 20px 40px rgba(255, 255, 255, 0.1)'
    }
  };

  return (
    <div 
      className="w-[200px] h-[200px] rounded-full flex items-center justify-center relative overflow-hidden"
      style={variants[variant]}
    >
      {/* Additional highlight for extra glossiness */}
      <div 
        className="absolute top-[15%] left-[20%] w-[30px] h-[30px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%)'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

// Example usage component with connecting lines
const BubbleChain = () => {
  return (
    <div className="flex items-center justify-center space-x-8 p-20 bg-gray-900">
      <GlowingBubble variant="blue">
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z"/>
        </svg>
      </GlowingBubble>
      
      {/* Connecting Line */}
      <div 
        className="w-20 h-0.5"
        style={{
          background: 'linear-gradient(90deg, #00BFFF, #00FFFF)',
          boxShadow: '0 0 10px 2px rgba(0, 191, 255, 0.5)'
        }}
      />
      
      <GlowingBubble variant="cyan">
        <div className="w-16 h-20 bg-white rounded-lg relative overflow-hidden">
          <div className="w-full h-6 bg-blue-500"></div>
          <div className="p-1 space-y-1">
            <div className="w-full h-1 bg-red-400 rounded"></div>
            <div className="w-3/4 h-1 bg-green-400 rounded"></div>
            <div className="w-1/2 h-1 bg-yellow-400 rounded"></div>
          </div>
        </div>
      </GlowingBubble>
      
      {/* Connecting Line */}
      <div 
        className="w-20 h-0.5"
        style={{
          background: 'linear-gradient(90deg, #00FFFF, #FF00FF)',
          boxShadow: '0 0 10px 2px rgba(0, 255, 255, 0.5)'
        }}
      />
      
      <GlowingBubble variant="purple">
        <svg className="w-16 h-12 text-white" fill="currentColor" viewBox="0 0 100 60">
          <ellipse cx="20" cy="45" rx="8" ry="8" />
          <ellipse cx="70" cy="45" rx="8" ry="8" />
          <path d="M15 45 L15 25 Q15 15 25 15 L60 15 Q70 15 70 25 L70 35 L75 35 L75 45" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      </GlowingBubble>
    </div>
  );
};

export { GlowingBubble, BubbleChain };
export default GlowingBubble;