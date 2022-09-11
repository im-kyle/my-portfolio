import React from 'react'
import { useNavigate } from 'react-router-dom';
 
export default function ProjectItem({image, name, id}) {

  const navigate = useNavigate();

  return (
    <div className="projectItem">
      <div 
      className="bgimage" 
      style={{
        backgroundImage: `url(${image})`, 
        aspectRatio: '16/9',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        }}
      onClick={() => {
        navigate("/projects/" + id)
        }}
      />
      <h1> {name} </h1>
    </div>
  )
}
