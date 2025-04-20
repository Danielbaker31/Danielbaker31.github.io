import React from "react";
import "../Styles/Projects.css";
import ProjectItem from "../Components/ProjectItem";
import { projectList } from "../helpers/ProjectLists";

/* Project.jsx
 * Through react and JSX, this file contains the HTML code displaying project cards on Project Page
 * maps each project card to an idx so that we know which project to display on click
 */
function Projects() {
    return (
        <div className="projects">
            <h1> Projects </h1>
            <div className="projectList">
                {projectList.map((project, idx) => {
                    return <ProjectItem name={project.name} image={project.image} id ={idx} />
                })}
            </div>
        </div>
        
    );
}

export default Projects;