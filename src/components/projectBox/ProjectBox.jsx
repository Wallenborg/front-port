import "./projectBox.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaRegLightbulb,
  FaLaptop,
} from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoColorPalette } from "react-icons/io5";
import { CgScreen } from "react-icons/cg";
import { PiReadCvLogoFill } from "react-icons/pi";
import useDisableTouchScroll from "../../hooks/ useDisableTouchScroll";

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
  useDisableTouchScroll(false);
  return (
    <div className="project-box">
      <div className="img-box">
        <img
          className="webpageimg"
          src={imgSrc}
          alt="Landing page of a website"
        />
      </div>
      <div className="icon-box">
        <FaHtml5 style={{ color: icon1 }} />
        <FaCss3Alt style={{ color: icon2 }} />
        <TbBrandJavascript style={{ color: icon3 }} />
        <FaReact style={{ color: icon4 }} />
        <FaLaptop style={{ color: icon5 }} />
        <IoColorPalette style={{ color: icon6 }} />
        <FaRegLightbulb style={{ color: icon7 }} />
      </div>
      <div className="text-box">
        <h2 className="project-title">{title}</h2>
        {infotext}
      </div>
      <div className="link-box">
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
      </div>
    </div>
  );
}

export default ProjectBox;
