import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Link from '@material-ui/core/Link';
import { Image } from 'react-native'
import "../Styles/Home.css";

function Home() {
    let alignRight = true;

    if (window.innerWidth <= 1150) {
        alignRight = false;
    }

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
                <div className="column">
                    <figure align={alignRight ? "right" : "center"}>
                        <img 
                            src ={require('../pics/img1.jpg')}
                            style={{width: 440, height: 550, borderRadius: 100/ 2}}
                            alt="alternatetext"/>
                        <figcaption> Great Sand Dunes NP, CO </figcaption>
                    </figure>
                </div>
                <div className="column">
                    <div className="paragraph">
                        <h1> About Me </h1>
                        <p> I love trying and learning new things. </p>
                        <p> Academically and professionally, this gets me excited about new classes, work experiences, or projects, such as creating this personal website. </p>
                        <p> In my personal life, this motivates me to travel. This year, I packed my bag and traveled to Colorado, Italy, and Croatia, where I met new lifelong friends from around the world. If you have suggestions for my next destination, let me know!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;