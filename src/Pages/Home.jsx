import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Link from '@mui/material/Link';
import headshot from "../Assets/square_ai_spiderman_headshot.jpg";
import img1 from "../Assets/img1.jpg";
import "../Styles/Home.css";

/* Home.jsx
 * Through react and JSX, this file contains the HTML code for the home page
 * Two sections: intro and aboutMe 
 * intro: headshot, professional statement, and MaterialUI icons that are hyperlinks
 * aboutMe: picture of hobby, about me paragraph. 
 *          automatically adjusts picture and paragraph alignment according to window width
 */
function Home() {
    let alignRight = true;

    if (window.innerWidth <= 1150) {
        alignRight = false;
    }

    return (
        <div className="home">
            <div className="intro">
                <div className="home-image-wrapper">
                    <img
                    src={headshot}
                    alt="Daniel Baker headshot"
                    className="home-image"
                    />
                </div>
                <h2> Hi, my name is Daniel </h2>
                <div className="headline">
                    <p> I am a computer engineering and economics student eager to learn and challenge myself with new software engineering experiences. </p>
                    <Link href="https://github.com/Danielbaker31/">
                        <GitHubIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/daniel-baker1/">
                        <LinkedInIcon />
                    </Link>
                    <Link href="mailto:danielbaker1102@gmail.com">
                        <MailOutlineIcon />
                    </Link>
                
                </div>
            </div>
            <div className="aboutMe">
                <div className="column">
                    <figure align={alignRight ? "right" : "center"}>
                        <img
                            src={img1}
                            alt="Great Sand Dunes NP, CO"
                            className="my-about-photo"/>
                        <figcaption> Great Sand Dunes NP, CO </figcaption>
                    </figure>
                </div>
                <div className="column">
                    <div className="paragraph">
                        <h1> About Me </h1>
                        <p> I love trying and learning new things. </p> 
                        <p> Academically and professionally, this gets me excited about new classes, work experiences, or projects, such as creating this personal website. </p>
                        <p> In my personal life, this means I'm constantly juggling a bunch of hobbies—from backpacking to film photography to boxing.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;