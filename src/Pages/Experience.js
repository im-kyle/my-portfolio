import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'; // easy, pretty timeline component library
import "react-vertical-timeline-component/style.min.css"; // import vertical timeline css styles
import "../Styles/Experience.css";
import School from "@mui/icons-material/School";
import Work from '@mui/icons-material/Work';

export default function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor="#800080">

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2013 - 2017"
        dateClassName="timeline-date"
        iconStyle={{ background: "#FFD700", color: "#800080" }}
        icon={<School />}
        contentStyle={{ backgroundColor: "#800080", color: "#FFD700" }}
        >
          <h3 className="vertical-timeline-element-title"> Ponderosa High School - Shingle Springs, CA </h3>
          <h5 style={{color: "#fff"}}> High School Diploma </h5>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2018 - 2020"
        dateClassName="timeline-date"
        iconStyle={{ background: "#FFD700", color: "#800080" }}
        icon={<School />}
        contentStyle={{ backgroundColor: "#800080", color: "#FFD700" }}
        >
          <h3 className="vertical-timeline-element-title"> Community College of the Air Force - Montgomery, AL </h3>
          <h5 style={{color: "#fff"}}> A.S. Information Technology </h5>
          <p> In Progress - 3 Credits Remaining </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2018 - 2020"
        dateClassName="timeline-date"
        iconStyle={{ background: "#800080", color: "#FFD700" }}
        icon={<Work />}
        contentStyle={{ backgroundColor: "#800080", color: "#FFD700" }}
        >
          <h3 className="vertical-timeline-element-title"> Air Force - Knowledge Management </h3>
          <h5 style={{color: "#fff"}}> 30th Space Communications Squadron - Vandenberg AFB, CA </h5>
          <ul> 
            <li>4x Airman of the Quarter</li> <br></br> 
            <li>Airman of the Year</li> <br></br> 
            <li>"Below-the-Zone" Early Promotion</li> 
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2021 - 2022"
        dateClassName="timeline-date"
        iconStyle={{ background: "#800080", color: "#FFD700" }}
        icon={<Work />}
        contentStyle={{ backgroundColor: "#800080", color: "#FFD700" }}
        >
          <h3 className="vertical-timeline-element-title"> Space Force - Cybersecurity Supervisor </h3>
          <h5 style={{color: "#fff"}}> 65th Cyber Squadron - Vandenberg SFB, CA </h5>
          <ul> 
            <li>Spearheaded Log4j Vulnerability Mitigation</li> <br></br> 
            <li>Assured Compliance Assessment System (ACAS) Analayst</li> <br></br> 
            <li>Recognized by Space Enlisted Leader (SEL)</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2021 - Present"
        dateClassName="timeline-date"
        iconStyle={{ background: "#FFD700", color: "#800080" }}
        icon={<School />}
        contentStyle={{ backgroundColor: "#800080", color: "#FFD700" }}
        >
          <h3 className="vertical-timeline-element-title"> Western Governor's University - Salt Lake City, Utah </h3>
          <h5 style={{color: "#fff"}}> B.S. Software Development </h5>
          <p> In Progress - 32 Credits Remaining </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2022 - Present"
        dateClassName="timeline-date"
        iconStyle={{ background: "#800080", color: "#FFD700" }}
        icon={<Work />}
        contentStyle={{ backgroundColor: "#800080", color: "#FFD700" }}
        >
          <h3 className="vertical-timeline-element-title"> Space Force - Software Engineer </h3>
          <h5 style={{color: "#fff"}}> 65th Cyber Squadron - Vandenberg SFB, CA </h5>
          <ul> 
            <li>Deployed Powershell Script to Monitor Network Health/Performance</li> <br></br> 
            <li>Familiarized with Palantir Foundry Warp-Core Data Management System</li> <br></br> 
            <li>Interned with Space CAMP - DECON+ (Orbital Laser Deconfliction Application)</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="Other"
        dateClassName="timeline-date"
        iconStyle={{ background: "#FFD700", color: "#800080" }}
        icon={<School />}
        contentStyle={{ backgroundColor: "#800080", color: "#FFD700" }}
        >
          <h3 className="vertical-timeline-element-title"> Certifications </h3>
          <h5 style={{color: "#fff"}}> ITIL Foundation </h5>
          <h5 style={{color: "#fff"}}> CompTIA Security+ </h5>
          <h5 style={{color: "#fff"}}> USSF x Galvanize Software Development Immersive </h5>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}
