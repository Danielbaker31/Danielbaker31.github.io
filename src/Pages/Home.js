import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Link from '@material-ui/core/Link';
import { Image } from 'react-native'
import "../Styles/Home.css";

/* Home.js
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
                <Image 
                    source={require('../Assets/square_ai_spiderman_headshot.jpg')}  
                    style={{width: 275,
                        height: 275,
                        borderRadius: '50%',
                        borderWidth: 5,
                        borderColor: 'white',
                        objectFit: 'cover',
                        overflow: 'hidden',
                        transform: 'scale(1.2)'}} 
                />
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
                            src ={require('../Assets/img1.jpg')}
                            style={{borderRadius: 100/ 2}}
                            alt="alternatetext"/>
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