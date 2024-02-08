import { useState, useEffect } from "react";
import chroma from "chroma-js";
import "./Button.css";

function RandomButton() {
  const [primaryColor, setPrimaryColor] = useState("#6e1c7c");
  const [accentColor, setAccentColor] = useState("#91e383");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.documentElement.style.setProperty("--clr-primary", primaryColor);
      document.documentElement.style.setProperty("--clr-accent", accentColor);
    }, 1000); // delay time in milliseconds

    // Clean up the timeout
    return () => clearTimeout(timeoutId);
  }, [primaryColor, accentColor]);

  function handleOnClick() {
    const newPrimaryColor = chroma.random();
    setPrimaryColor(newPrimaryColor);
    const hue = chroma(newPrimaryColor).get("hsl.h");
    setAccentColor(
      chroma(newPrimaryColor)
        .set("hsl.h", (hue + 180) % 360)
        .hex()
    );
  }

  return (
    <button onClick={handleOnClick} className="random-button">
      Random Colors
    </button>
  );
}

export default RandomButton;
