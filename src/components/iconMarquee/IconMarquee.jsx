import Marquee from "react-fast-marquee";
import "./IconMarquee.css";
import { FaPeopleGroup, FaCss3Alt } from "react-icons/fa6";
import { FaReact, FaHtml5, FaTools, FaGit } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeindesign } from "react-icons/si";
import { GiPaintBrush } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";

function IconMarquee() {
  return (
    <Marquee className="marquee">
      <FaPeopleGroup className="marquee-icon" />
      <FaReact className="marquee-icon" />
      <FaHtml5 className="marquee-icon" />
      <IoLogoJavascript className="marquee-icon" />
      <FaCss3Alt className="marquee-icon" />
      <FaGit className="marquee-icon" />
      <SiAdobephotoshop className="marquee-icon" />
      <SiAdobeindesign className="marquee-icon" />
      <FaTools className="marquee-icon" />
      <GiPaintBrush className="marquee-icon" />
      <RiComputerLine className="marquee-icon" />
      <FaPeopleGroup className="marquee-icon" />
      <FaReact className="marquee-icon" />
      <FaHtml5 className="marquee-icon" />
      <FaCss3Alt className="marquee-icon" />
      <SiAdobephotoshop className="marquee-icon" />
      <SiAdobeindesign className="marquee-icon" />
      <FaTools className="marquee-icon" />
      <GiPaintBrush className="marquee-icon" />
      <RiComputerLine className="marquee-icon" />
    </Marquee>
  );
}

export default IconMarquee;
