import { useState, useEffect } from "react";
import "./Button.css";

function Button() {
  const [buttonText, setButtonText] = useState("PROJECTS");
  const [currentSection, setCurrentSection] = useState(1);

  const handleOnClick = () => {
    // Scroll to the next section
    setCurrentSection((prevSection) => {
      const nextSection = prevSection === 1 ? 2 : 1; // Toggle between section 1 and section 2
      const section = document.getElementById(`section${nextSection}`);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });

        if (nextSection === 1) {
          setButtonText("PROJECTS");
        } else if (nextSection === 2) {
          setButtonText("RETURN");
        }

        return nextSection;
      }

      return prevSection; // Return the current section if the next section doesn't exist
    });
  };

  return (
    <div className="test2">
      <button onClick={handleOnClick} className="main-button">
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
