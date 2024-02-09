import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import statements
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Section1 from "./components/sections/Section1";
import RandomPixel from "./components/randomPixel/RandomPixel";
import RandomButton from "./components/button/RandomButton";
import Section2 from "./components/sections/Section2";

function App() {
  // reload the page and scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/section1" element={<Section1 />} />
          <Route path="/section2" element={<Section2 />} />
        </Routes>
        <RandomButton />
        <Button />
      </main>
    </Router>
  );
}

export default App;
