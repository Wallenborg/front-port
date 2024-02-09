import "./App.css";
import { useEffect } from "react";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import ProjectList from "./components/projectBox/ProjectList";
// import RandomSquare from "./components/randomSquare/RandomSquare";
import Name from "./components/name/Name";
import RandomPixel from "./components/randomPixel/RandomPixel";
import InfoText from "./components/infoText/InfoText";
import RandomButton from "./components/button/RandomButton";
import useDisableTouchScroll from "./hooks/ useDisableTouchScroll";

function App() {
  //relod the page make the scroll go up
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useDisableTouchScroll(true);

  return (
    <main>
      <section id="section1" className="site-section section1">
        {/* <RandomSquare /> */}
        <RandomPixel />
        <Header />
        <Name />
        <InfoText />
        <p className="testtest">I build things for the Web !</p>
        <RandomButton />
        <Button />
      </section>
      <section id="section2" className="site-section section2">
        <ProjectList />
      </section>
    </main>
  );
}

export default App;
