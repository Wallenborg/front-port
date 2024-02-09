import "./App.css";
import { useEffect } from "react";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import ProjectList from "./components/projectBox/ProjectList";
import Name from "./components/name/Name";
import RandomPixel from "./components/randomPixel/RandomPixel";
import InfoText from "./components/infoText/InfoText";
import RandomButton from "./components/button/RandomButton";
import useDisableTouchScroll from "./hooks/ useDisableTouchScroll";
import SecretText from "./components/secrettext/SecretText";
import Email from "./components/email/Email";

function App() {
  //relod the page make the scroll go up
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useDisableTouchScroll(true);

  return (
    <main>
      <section id="section1" className="site-section section1">
        <RandomPixel />
        <Header />
        <div className="div1">
          <Name />
        </div>
        <div className="div2">
          <Email />
        </div>
        <div className="div3">
          <InfoText />
        </div>
        <div className="div4">
          <SecretText />
        </div>
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
