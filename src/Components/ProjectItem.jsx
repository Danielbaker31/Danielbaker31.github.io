import React from "react";
import { useNavigate } from "react-router-dom";

/* ProjectItem.js
 * functionality for displaying preview cards of projects (backgroundImage)
 * functionality for navigating to corresponding project page on click of its card (useNavigate())
 */
function ProjectItem({ name, image, id }) {
    const navigate = useNavigate();
    return (
        <div className="projectItem" onClick={() => { navigate("/projects/" + id); }} >
            <div style={{backgroundImage: `url(${image})` }} className = "backgroundImage" />
            <h1> {name} </h1>
        </div>
        
    );
}

export default ProjectItem;