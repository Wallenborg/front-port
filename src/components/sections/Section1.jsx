import SecretText from "../secrettext/SecretText";
import Email from "../email/Email";
import InfoText from "../infoText/InfoText";
import Name from "../name/Name";
import RandomPixel from "../randomPixel/RandomPixel";
import "./sections.css";

function Section1() {
  return (
    <section id="section1" className="site-section section1">
      <RandomPixel />
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
    </section>
  );
}

export default Section1;
