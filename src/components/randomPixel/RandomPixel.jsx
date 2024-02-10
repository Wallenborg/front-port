import React, { useState, useEffect } from "react";
import "./randompixel.css";

function RandomPixel() {
  const [pixels, setPixels] = useState([]);

  useEffect(() => {
    const generatePixel = () => {
      const newPixel = {
        id: Date.now(),
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
      };
      setPixels((prevPixels) => [...prevPixels, newPixel]);
    };

    const intervalId = setInterval(generatePixel, 100);

    // Cleanup function to stop the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="pixel-container">
      {pixels.map((pixel) => (
        <div
          key={pixel.id}
          className="random-pixel"
          style={{ left: pixel.left, top: pixel.top }}
        />
      ))}
    </div>
  );
}

export default RandomPixel;
