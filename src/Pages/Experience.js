import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

/* Experience.js
 * Through react and JSX, this file contains the HTML code for the experience page
 * Use VerticleTimeline to display experiences: 
 *  - class element--education for univeristy, class element--work for work experience
 *  - class element--title and subtitle for each school/company name, and major/role, respectively
 *  - paragraph element for description
 * Use verticle timeline icons for school and work
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
                    <p> Involvement: Illini Boxing Team, Illinois Space Society, Delta Chi Fraternity </p>
                    <p> Honors: ECE James Scholar Honors Student, Dean's List, Computer Systems and Programming Honors Program </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="Summer 2024"
                    iconStyle={{ background: "#FB8122", color: "#fff" }}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element--title"> Microsoft </h3>
                    <h4 className="vertical-timeline-element--subtitle"> Software Engineer Intern </h4>
                    <p> Developed and deployed AI Audience Analytics for Viva’s more than 35M MAU. Allows leadership to gauge team dynamics and sentiment through trending themes and summaries, top conversations, and sentiment analysis. </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="Spring 2024"
                    iconStyle={{ background: "#1D2228", color: "#fff" }}
                    icon={<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element--title"> University of Hong Kong </h3>
                    <h4 className="vertical-timeline-element--subtitle"> Exchange Student Semester </h4>
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
                    date="Summer 2022"
                    iconStyle={{ background: "#FB8122", color: "#fff" }}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element--title"> Eberhard Manufacturing Company </h3>
                    <h4 className="vertical-timeline-element--subtitle"> Electrical Engineering Intern </h4>
                    <p> Troubleshoot and upgraded electro-mechanical products as well as designed external embedded systems. </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;