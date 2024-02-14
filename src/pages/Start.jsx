import SecretText from "../components/secrettext/SecretText";
import Email from "../components/email/Email";
import InfoText from "../components/infoText/InfoText";
import Name from "../components/name/Name";
import "./start.css";
// import RandomPixel from "../components/randomPixel/RandomPixel";

function Start() {
  return (
    <section className="section-start-grid">
      {/* <RandomPixel /> */}
      <div className="grid--name">
        <Name />
      </div>
      <div className="grid--info-text">
        <InfoText />
      </div>
      <div className="grid--secret-text">
        <SecretText />
      </div>
    </section>
  );
}

export default Start;
