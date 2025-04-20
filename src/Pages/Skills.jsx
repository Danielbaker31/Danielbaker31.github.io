import React from "react";
import "../Styles/Skills.css";

/* Skills.js
 * Through react and JSX, this file contains the HTML code for the skills page
 * simply use HTML DOM to format page, using list of headings (skill catagory), span (skills part of the category)
 */
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
                    <span> KiCad, LabView, Git/GitHub, Linux, GNU Debugger, React.js, Node.js, Cadence Design Software, Docker, Microsoft Office </span>
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