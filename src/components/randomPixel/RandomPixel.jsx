// import React, { useState, useEffect } from "react";
// import "./randompixel.css";

// function RandomPixel({ keyToRestart }) {
//   const [pixels, setPixels] = useState([]);

//   useEffect(() => {
//     const generatePixel = () => {
//       const newPixel = {
//         id: Date.now(),
//         left: `${Math.random() * 100}vw`,
//         top: `${Math.random() * 100}vh`,
//       };
//       setPixels((prevPixels) => [...prevPixels, newPixel]);
//     };

//     const intervalId = setInterval(generatePixel, 100);

//     const restartTimer = setTimeout(() => {
//       clearInterval(intervalId);
//       setPixels([]);
//       keyToRestart(); // Callback to trigger key change in parent
//     }, 30 * 60 * 1000); // Restart after 30 minutes

//     return () => {
//       clearInterval(intervalId);
//       clearTimeout(restartTimer);
//     };
//   }, [keyToRestart]);

//   return (
//     <div style={{ overflow: "hidden" }}>
//       {pixels.map((pixel) => (
//         <div
//           key={pixel.id}
//           className="random-pixel"
//           style={{ left: pixel.left, top: pixel.top }}
//         />
//       ))}
//     </div>
//   );
// }

// export default RandomPixel;

import React, { useState, useEffect } from "react";
import "./randompixel.css";

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

    const intervalId = setInterval(generatePixel, 100);

    const restartTimer = setTimeout(() => {
      clearInterval(intervalId);
      setPixels([]);
      keyToRestart(); // Callback to trigger key change in parent
    }, 30 * 60 * 1000); // Restart after 30 minutes

    document.body.classList.add("no-horizontal-scroll");

    return () => {
      clearInterval(intervalId);
      clearTimeout(restartTimer);
      // Remove the CSS class when the component is unmounted
      document.body.classList.remove("no-horizontal-scroll");
    };
  }, [keyToRestart]);

  return (
    <div>
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
