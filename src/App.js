import "./App.css";
import { useEffect } from "react";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Section1 from "./components/sections/Section1";
import RandomPixel from "./components/randomPixel/RandomPixel";
import RandomButton from "./components/button/RandomButton";
import Section2 from "./components/sections/Section2";

function App() {
  //relod the page make the scroll go up
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <RandomPixel />
      <Header />
      <Section1 />
      <RandomButton />
      <Button />
      <Section2></Section2>
    </main>
  );
}

export default App;
