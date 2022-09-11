import GitHub from '@mui/icons-material/GitHub';
import React from 'react'
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import '../Styles/ProjectDisplay.css';

export default function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="project" style={{maxHeight: '500px', maxWidth: '100%'}} />
      <p>
        <h4><b>Skills Used:</b></h4> {project.skills}
      </p>
      <div className="project-repo">
        <h4>Code Repo</h4><GitHub />
      </div>
    </div>
  )
}
