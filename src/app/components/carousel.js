"use client";
import { useState, useEffect } from "react";

function Carousel({
  children: images,
  autoSlide = false,
  autoSlideInterval = 5000,
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () =>
    setCurrentImage((currentImage) =>
      currentImage === images.length - 1 ? 0 : currentImage + 1
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextImage, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div
      className="flex transition-transform ease-out duration-500 w-full"
      style={{
        transform: `translateX(-${currentImage * 100}%)`,
       /*  width: "100vw", */
      }}
    >
      {images}
    </div>
  );
}

export default Carousel;
