import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/ProjectDisplay.css";
import { projectList } from "../helpers/ProjectLists";
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';

/* ProjectDisplay.jsx
 * Through react and JSX, this file contains the HTML code for formatting how a project' page, from ProjectLists, will be displayed on click of its card
 * React's useParams() helps find the correct project to display from projectList
 * heading: project.name 
 * paragraph: project.desciption
 * img: paragraphs card image
 * paragraph: project.skills
 * materialUI github icon: project.link
 */
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