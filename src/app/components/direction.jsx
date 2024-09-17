"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Direction() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center mt-5 relative" style={{ height: '600px' }}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500">
          <Image
            src="/air-peace.png"
            alt="Map loading placeholder"
            width={800}
            height={600}
            className="object-cover"
          />
          <div className="absolute">Loading map...</div>
        </div>
      )}
      {isLoaded && (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1wAgqkNFAFKe4JEJPG4z0LqNzaL4VS0Y&ehbc=2E312F&noprof=1"
          width="100%"
          height="630"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
}