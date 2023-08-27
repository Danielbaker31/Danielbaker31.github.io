import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Link from '@material-ui/core/Link';
import "../Styles/Footer.css"

function Footer() {
    return (
        <div className="Footer">
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

        </div>
    );
}

export default Footer;