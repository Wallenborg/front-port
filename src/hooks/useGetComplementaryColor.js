import { useState, useEffect } from "react";

const useGetComplementaryColor = ({ mixColor }) => {
  const [complementaryColor, setComplementaryColor] = useState("#000");
  /* This step involves mapping over the RGB array and subtracting each
 component from 255. This effectively calculates the complementary RGB values.*/
  const calculateComplementaryColor = (hexColor) => {
    // Constructing the complementary hex color
    const rgb = hexColor
      .slice(1)
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16));

    const complementaryRGB = rgb.map((value) => 255 - value);

    const complementaryHex =
      "#" +
      complementaryRGB
        .map((value) => value.toString(16).padStart(2, "0"))
        .join("");

    return complementaryHex;
  };

  useEffect(() => {
    const complementaryHexColor = calculateComplementaryColor(mixColor);
    setComplementaryColor(complementaryHexColor);
  }, [mixColor]);

  return { mixColor, complementaryColor };
};

export default useGetComplementaryColor;
