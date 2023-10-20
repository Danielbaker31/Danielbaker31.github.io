import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

/* Expereince.js
 * Through react and JSX, this file contains the HTML code for the experience page
 * Use VerticleTimeline to display expereinces
 *  - 
 */
function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#1D2228">
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="August 2021 - May 2025"
                    iconStyle={{ background: "#1D2228", color: "#fff" }}
                    icon={<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element--title"> University of Illinois Urbana-Champaign </h3>
                    <h4 className="vertical-timeline-element--subtitle"> Bachelor of Science - BS, Computer Engineering </h4>
                    <h4 className="vertical-timeline-element--subtitle"> Bachelor of Arts - BA, Economics </h4>
                    <p> Involvement: University of Hong Kong Exchange Student (SP24), Illini Boxing Team, Illinois Space Society, Delta Chi Fraternity </p>
                    <p> Honors: ECE James Scholar Honors Student, Dean's List, Computer Systems and Programming Honors Program </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="Summer 2022"
                    iconStyle={{ background: "#FB8122", color: "#fff" }}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element--title"> Eberhard Manufacturing Company </h3>
                    <h4 className="vertical-timeline-element--subtitle"> Electrical Engineering Intern </h4>
                    <p> Troubleshoot and upgraded electro-mechanical products as well as designed external embedded systems. </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="January 2022 - Present"
                    iconStyle={{ background: "#FB8122", color: "#fff" }}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element--title"> Electrical and Computer Engineering Department, University of Illinois Urbana-Champaign </h3>
                    <h4 className="vertical-timeline-element--subtitle"> Course Assistant </h4>
                    <p> I teach students during my office hours for Computer Systems and Programming (ECE 220) - a C/C++ and LC-3 Assembly programming class. </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="Summer 2023"
                    iconStyle={{ background: "#FB8122", color: "#fff" }}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element--title"> Northrop Grumman </h3>
                    <h4 className="vertical-timeline-element--subtitle"> Software Engineering Intern </h4>
                    <p> Created software and hardware to accurately and efficiently test products as a part of the RF Systems Manufacturing Test team within Operations. </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;