import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Link from '@material-ui/core/Link';
import { Image } from 'react-native'
import "../Styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="intro">
                <Image 
                    source={require('../pics/headshot.JPG')}  
                    style={{width: 275, height: 275, borderRadius: 400/ 2, borderWidth: 5, borderColor: 'white'}} 
                />
                <h2> Hi, my name is Daniel </h2>
                <div className="headline">
                    <p> I am computer engineering and economics student eager to learn and challenge myself with new software engineering experiences. </p>
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
                <h1> About Me </h1>
                <div className="paragraph">
                    <p> I love trying and learning new things. </p>
                    <p> Academically and professionally, this gets me excited and motivated about new classes, intern roles, or projects, such as creating this personal website. </p>
                    <p> In my personal life, it motivates me to travel, or pick up new hobbies. This year, I have experienced Colorado, Italy, and Croatia, and picked up photography, boxing, and brazilian jiu jitsu as hobbies.  </p>
                </div>
            </div>
        </div>
    );
}

export default Home;