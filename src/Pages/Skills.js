import React from "react";
import "../Styles/Skills.css";

function Skills() {
    return (
        <div className="skills">
            <h1> Skills </h1>
            <ol className="list">
                <li className="item">
                    <h2> Languages </h2>
                    <span> C/C++, x86 Assembly, Python, JavaScript, CSS, HTML, LaTeX</span>
                </li>
                <li className="item">
                    <h2> Developer Tools </h2>
                    <span> KiCad, LabView, Git/Github, Linux, GNU Debugger, React.js, Cadence Design Software, Microsoft Office </span>
                </li>
                <li className="item">
                    <h2> Industry Skills </h2>
                    <span> Electronic Design Automation (EDA), Embedded Systems, UI/UX Design, Machine Learning </span>
                </li>
            </ol>
        </div>
    );
}

export default Skills;