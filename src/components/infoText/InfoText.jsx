import "./InfoText.css";

function InfoText() {
  return (
    <div className="infotext-box">
      <div className="line"></div>
      <p className="infotext-box--text">
        {/* Creative Developer and Interdisciplinary Artist with a master's in fine
        arts from Konstfack. Frontend Developer student at Hyper Island 23-25. I
        fuse art and digital culture. Passionate about creative coding and also
        the designe process. Love working on projects from concept to
        completion. Let's build something together, one pixel at a time. Based
        in Stockholm.
        <br />
       
          (Looking for a 6 month long internship. Starts, September 2024)
        </span> */}
        Creative developer and interdisciplinary artist. Frontend Developer
        student at Hyper Island 23-25. Master’s degree in Fine Arts from
        Konstfack.
        <br /> I am a creative problem solver and always eager to learn. Based
        in Stockholm.
        <br />
        <span className="infotext-box--span">
          Looking for six monthslong internship, start September 2024.
        </span>
      </p>
    </div>
  );
}

export default InfoText;
