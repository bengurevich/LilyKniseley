import React from 'react';

const AboutButton: React.FC = () => {
  return (
    <div className="relative w-[120px] h-[120px]">
      {/* Create a circular SVG with About text */}
      <svg 
        width="120" 
        height="120" 
        viewBox="0 0 120 120" 
        className="w-full h-full"
      >
        {/* Circle background */}
        <circle
          cx="60"
          cy="60"
          r="55"
          fill="#000000"
          stroke="#000000"
          strokeWidth="2"
        />
        
        {/* Circular text path */}
        <defs>
          <path
            id="circle-path"
            d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
          />
        </defs>
        
        {/* Text following the circular path */}
        <text
          fontSize="14"
          fill="white"
          fontFamily="'Azeret Mono', monospace"
          fontWeight="400"
          letterSpacing="3px"
        >
          <textPath href="#circle-path" startOffset="0%">
            • ABOUT • ABOUT • ABOUT • ABOUT 
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default AboutButton;