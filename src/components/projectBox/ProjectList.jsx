import "./projectBox.css";
import { projects } from "../../data";
import ProjectBox from "./ProjectBox";

function ProjectList() {
  return (
    <div className="test-box">
      {projects.map((project, index) => (
        <ProjectBox key={index} {...project} />
      ))}
    </div>
  );
}

export default ProjectList;
