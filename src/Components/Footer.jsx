import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Link from '@mui/material/Link';
import "../Styles/Footer.css";

/* Footer.jsx
 * Through react and JSX, this file contains the HTML code for the footer
 * use MaterialUI to again link important URLS
 * add little note on bottom to claim website in a way lol
 */
function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
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
            <p> Created by Daniel Baker, 2023</p>
            <p> My first project using JS, React.js, HTML, and CSS!</p>

        </div>
    );
}

export default Footer;