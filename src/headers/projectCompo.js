import React from 'react'
import "../headers/stylesh.css"

const ProjectCompo = (props) => {
  return (
    <div style={{border:"0.2px solid black"}}>
      <div className='procomp'>
      <h1 style={{backgroundColor:"gray",color:"maroon"}}>Project Name: {props.name}</h1>
      <h3>Description:</h3>
      <p>{props.description}</p>
      </div>
      <div>
        <a href={props.url}><img style={{height:"50px",width:"50px"}} alt="" src="https://imgs.search.brave.com/ApMAOtiBjaSlqVAWd4Skx4hHT4yKfGgiemacmJCy-og/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2l0aHViL3Nt/YWxsL2dpdGh1Yl9Q/Tkc4OS5wbmc"/></a>
      </div>
    </div>
  )
}

export default ProjectCompo
