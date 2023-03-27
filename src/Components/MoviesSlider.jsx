import React, { useState, useEffect } from "react";

const MoviesSlider = ({ images, autoSlideDelay }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, autoSlideDelay);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length, autoSlideDelay]);

  return (
    <div className="carousel">
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        width={"100%"}
        height="350px"
      />
    </div>
  );
};

export default MoviesSlider;
