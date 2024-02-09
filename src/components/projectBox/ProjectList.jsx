import "./projectBox.css";
import { projects } from "../../data";
import ProjectBox from "./ProjectBox";
import useDisableTouchScroll from "../../hooks/ useDisableTouchScroll";

function ProjectList() {
  // useDisableTouchScroll(false);

  return (
    <div className="test-box">
      {projects.map((project, index) => (
        <ProjectBox key={index} {...project} />
      ))}
    </div>
  );
}

export default ProjectList;
