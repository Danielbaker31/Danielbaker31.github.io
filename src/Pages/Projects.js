import React from "react";
import "../Styles/Projects.css";
import ProjectItem from "../Components/ProjectItem";
import { projectList } from "../helpers/ProjectLists";

function Projects() {
    return (
        <div className="projects">
            <h1> Personal Projects </h1>
            <div className="projectList">
                {projectList.map((project) => {
                    return <ProjectItem name={project.name} image={project.image} />
                })}
            </div>
        </div>
        
    );
}

export default Projects;