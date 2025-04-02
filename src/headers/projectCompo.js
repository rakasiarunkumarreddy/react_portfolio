import React from 'react'
import "../headers/stylesh.css"

const ProjectCompo = (props) => {
  return (
    <div style={{border:"0.2px solid black"}}>
      <div className='procomp'>
      <h1 style={{backgroundColor:"",color:"maroon"}}>{props.name}</h1>
      <h3><strong>Description:</strong></h3>
      <p>{props.description}</p>
      </div>
      <div>
        <a href={props.url}><img style={{height:"50px",width:"50px"}} alt="" src="https://imgs.search.brave.com/ApMAOtiBjaSlqVAWd4Skx4hHT4yKfGgiemacmJCy-og/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2l0aHViL3Nt/YWxsL2dpdGh1Yl9Q/Tkc4OS5wbmc"/></a>
<a 
  href={props.deploy} 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ position: "relative", display: "inline-block" }}
>
  <img 
    style={{ 
      height: "50px", 
      width: "50px", 
      transition: "transform 0.3s ease", 
      animation: "pulse 1.5s infinite" 
    }} 
    alt="" 
    src="https://tinyurl.com/58rvuyhx" 
    className="pulse-image"
  />
  <span 
    style={{ 
      visibility: "hidden",
      position: "absolute",
      top: "60px", 
      left: "50%", 
      transform: "translateX(-50%)",
      backgroundColor: "black",
      color: "#fff",
      padding: "2px 4px",
      borderRadius: "4px",
      fontSize: "12px",
      whiteSpace: "nowrap"
    }} 
    className="tooltip-text"
  >
    Deployment Link
  </span>

  <style>
    {`
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
      }

      a:hover .pulse-image {
        animation: none;
        transform: scale(1.1);
      }

      a:hover .tooltip-text {
        visibility: visible;
      }
    `}
  </style>
</a>
      </div>
    </div>
  )
}

export default ProjectCompo
