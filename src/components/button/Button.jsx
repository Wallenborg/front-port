import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  const [buttonText, setButtonText] = useState("PROJECTS");

  const handleOnClick = () => {
    setButtonText((prevText) =>
      prevText === "PROJECTS" ? "RETURN" : "PROJECTS"
    );
  };

  return (
    <div className="test2">
      <Link to={buttonText === "PROJECTS" ? "/projects" : "/"}>
        <button onClick={handleOnClick} className="main-button">
          {buttonText}
        </button>
      </Link>
    </div>
  );
}

export default Button;
