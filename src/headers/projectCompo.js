import React from 'react'
import "../headers/stylesh.css"

const ProjectCompo = (props) => {
  return (
    <div className='procomp'>
      <h1 style={{backgroundColor:"gray",color:"maroon"}}>Project Name: {props.name}</h1>
      <h3>Description:</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default ProjectCompo
