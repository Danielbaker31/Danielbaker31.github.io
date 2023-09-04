import React from "react";

function ProjectItem({ name, image }) {
    return (
        <div className="projectItem">
            <div style={{backgroundImage: `url(${image})` }} className = "backgroundImage" />
            <h1> {name} </h1>
        </div>
        
    );
}

export default ProjectItem;