import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge'; // Assuming you have Tailwind CSS set up

// Import your background image (e.g., grainImage)
import grainImage from '@/assets/images/grain.jpg';

const Card = ({ className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        'bg-gray-800 rounded-3xl relative z-0 overflow-hidden',
        className
      )}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      {/* Children */}
      {children}
    </div>
  );
};

export default Card;
