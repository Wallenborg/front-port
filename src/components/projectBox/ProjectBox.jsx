import "./projectBox.css";
import { FaCss3Alt, FaGithub, FaRegLightbulb, FaLaptop } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoColorPalette } from "react-icons/io5";
import { CgScreen } from "react-icons/cg";
import { FaHtml5 } from "react-icons/fa";

function ProjectBox({
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  title,
  infotext,
  link1,
  link2,
  imgSrc,
}) {
  return (
    <article className="box-project">
      <div className="pixel-border"></div>
      <div className="project-title">
        <h2 className="project-title-text">{title}</h2>
      </div>
      <div className="project-img">
        <img
          className="webpageimg"
          src={imgSrc}
          alt="Landing page of a website"
        />
      </div>
      <div className="projekt-info">
        <div>{infotext}</div>
      </div>
      <div className="project-links">
        <a href={link1} target="_blank" rel="noopener noreferrer">
          <CgScreen />
        </a>
        <a href={link2} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        {/* <div className="link-box">
          {link1 && (
            <a href={link1} target="_blank" rel="noopener noreferrer">
              <CgScreen />
            </a>
          )}
          {link2 && (
            <a href={link2} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          )}
        </div> */}
      </div>
    </article>
  );
}

export default ProjectBox;
