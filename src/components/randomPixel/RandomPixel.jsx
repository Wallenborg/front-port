import React, { useState, useEffect } from "react";

function RandomPixel({ keyToRestart }) {
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

    const intervalId = setInterval(generatePixel, 500);

    const restartTimer = setTimeout(() => {
      clearInterval(intervalId);
      setPixels([]);
      keyToRestart(); // Callback to trigger key change in parent
    }, 30 * 60 * 1000); // Restart after 30 minutes

    return () => {
      clearInterval(intervalId);
      clearTimeout(restartTimer);
    };
  }, [keyToRestart]);

  return (
    <div>
      {pixels.map((pixel) => (
        <div
          key={pixel.id}
          style={{
            position: "absolute",
            left: pixel.left,
            top: pixel.top,
            width: "5vw",
            height: "5vw",
            backgroundColor: "var(--clr-accent)",
          }}
        />
      ))}
    </div>
  );
}

export default RandomPixel;
