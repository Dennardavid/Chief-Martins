"use client";

import { useState, useEffect } from "react";

export default function Direction() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          <div className="absolute">Loading map...</div>
        </div>
      )}
      {isLoaded && (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1wAgqkNFAFKe4JEJPG4z0LqNzaL4VS0Y&ehbc=2E312F&noprof=1"
          className="w-full h-[100dvh]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
}