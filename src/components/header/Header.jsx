import "./Header.css";
import { FaInstagram, FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className="header-box">
      <header>
        <div>
          <h1 className="title">Creative Developer</h1>
        </div>
        <div className="header--icon-box">
          <FaInstagram className="header--icon" />
          <FaGithub className="header--icon" />
        </div>
      </header>
      <div className="square-box">
        <div className="square1"></div>
        <div className="square2"></div>
        <div className="square3"></div>
        <div className="square4"></div>
      </div>
    </div>
  );
}

export default Header;

//   return (
//     <header>
//       <div className="C_T_B">
//         <ColorTextBox text={"N"} animationDelay={0} />
//         <ColorTextBox text={"W"} animationDelay={2} />
//       </div>
//       <div className="header--icon-box">
//         <FaInstagram className="header--icon" />
//         <FaGithub className="header--icon" />
//       </div>
//     </header>
//   );
//
