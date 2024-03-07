import { LuArrowDownFromLine } from "react-icons/lu";
import { FaArrowCircleDown } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";

import "./Arrow.css";

function Arrow() {
  //   return <LuArrowDownFromLine className="arrow" />;
  //   return <FaArrowCircleDown className="arrow" />;
  return <MdDoubleArrow className="arrow turn" />;
}

export default Arrow;
