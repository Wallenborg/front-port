import "./projectBox.css";
import { projects } from "../../data";
import ProjectBox from "./ProjectBox";

function ProjectList() {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectBox key={project.title} {...project} />
      ))}
    </div>
  );
}

export default ProjectList;
