import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/ProjectDisplay.css";
import { projectList } from "../helpers/ProjectLists";
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';


function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
    return ( <div className="project">
        <h1> {project.name} </h1>
        <p> {project.description} </p>
        <img src={project.image} alt="alternatetext"/>
        <p> <b>Skills:</b> {project.skills}</p>
        <Link href={project.link}>
                <GitHubIcon />
        </Link>
    </div> );
}

export default ProjectDisplay;