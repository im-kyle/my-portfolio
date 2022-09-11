import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';
import '../Styles/Footer.css';
import { OpenEmail, OpenLinkedIn, OpenGithub } from '../Pages/Home';

//bottom of page links to my accounts
export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Email onClick={OpenEmail}/>
        <LinkedInIcon onClick={OpenLinkedIn}/>
        <GitHub onClick={OpenGithub}/>
      </div>
      <p> &copy; 2022 imkyle.tech</p> { /* implements unicode symbol for copyright */ }
    </div>
  )
}
