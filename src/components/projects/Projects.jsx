import "./projects.css";
import webpageImg from "../../img/img001.jpg";

function Projects() {
  return (
    <div>
      <div className="box-project">
        <div className="pixel-border"></div>
        <div className="project-img">
          <img
            className="round-img"
            src={webpageImg}
            alt="landing page website"
          />
          ;
        </div>
        <div className="project-title">
          <div className="project-title-text">Art portfolio</div>
        </div>
        <div className="project-info"></div>
        <div className="project-link"></div>
      </div>
    </div>
  );
}

export default Projects;

// return (
//     <div className="project-box">
//       <div className="img-box">
//         <img
//           className="webpageimg"
//           src={imgSrc}
//           alt="Landing page of a website"
//         />
//       </div>
//       <div className="icon-box">
//         <FaHtml5 style={{ color: icon1 }} />
//         <FaCss3Alt style={{ color: icon2 }} />
//         <TbBrandJavascript style={{ color: icon3 }} />
//         <FaReact style={{ color: icon4 }} />
//         <FaLaptop style={{ color: icon5 }} />
//         <IoColorPalette style={{ color: icon6 }} />
//         <FaRegLightbulb style={{ color: icon7 }} />
//       </div>
//       <div className="text-box">
//         <h2 className="project-title">{title}</h2>
//         {infotext}
//       </div>
//       <div className="link-box">
//         {link1 && (
//           <a href={link1} target="_blank" rel="noopener noreferrer">
//             <CgScreen />
//           </a>
//         )}
//         {link2 && (
//           <a href={link2} target="_blank" rel="noopener noreferrer">
//             <FaGithub />
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }
