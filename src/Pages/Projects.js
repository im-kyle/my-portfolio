import React from 'react'
import ProjectItem from './ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
import '../Styles/Projects.css';


export default function Projects() {
  return (
    <div className="projects">
      <h1 className="projectTitle">Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} key={project.name} name={project.name} image={project.image} />
        })}
      </div>
    </div>
  )
}
