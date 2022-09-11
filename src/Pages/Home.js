import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';
import '../Styles/Home.css';

export const OpenLinkedIn = () => window.open("https://www.linkedin.com/in/kyle-horne-511222239/")
export const OpenEmail = () => window.open("mailto:kyle.horne@outlook.com")
export const OpenGithub = () => window.open("https://github.com/im-kyle")

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, I'm Kyle! </h2>
        <div className="prompt">
          <p> 
            Full-Stack Developer - USSF Supra Coder
          </p>
          <p>
            Letting my curiosity and passion for learning guide me!
          </p>
          <Email onClick={OpenEmail}/>
          <LinkedInIcon onClick={OpenLinkedIn} />
          <GitHub onClick={OpenGithub} />
        </div>
      </div>
      <div className="skills">
        <h1> Current Skillset </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span> ReactJS, HTML, CSS, NPM, Axios, Jest, Cypress, MaterialUI </span>
          </li>
          <li className="item">
            <h2> Back-End </h2>
            <span> NodeJS, ExpressJS, PostgreSQL, MongoDB, KnexJS, Docker </span>
          </li>
          <li className="item">
            <h2> Languages </h2>
            <span> JavaScript, TypeScript </span>
          </li>
        </ol>
      </div>
    </div>
  )
}
