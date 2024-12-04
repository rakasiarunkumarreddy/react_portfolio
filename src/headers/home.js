import React from 'react'
import "./stylesh.css"

const Home = () => {
  return (
    <div className='abhead'>
      <div>
        <img style={{paddingTop:"20%",borderRadius:"50%",height:"50vh",width:"50vh",marginLeft:"20px"}} src="https://i.ibb.co/9wKVY3t/photo2.png" alt=""/>
      </div>
      <div>
        <div style={{padding:"20px"}}>
            <h1 style={{paddingTop:"20%",color:"maroon"}}>Arun Kumar Reddy Rakasi</h1>
            <p>I am a motivated Front-End Developer with hands-on experience in HTML, CSS, JavaScript, and React.js, 
            specializing in creating responsive, mobile-friendly websites with Bootstrap and ensuring cross-browser 
            compatibility. Proficient in using Git and GitHub for version control and collaborative development. In addition 
            to front-end expertise, I have a foundation in SQL and basic knowledge of Python, and I am currently enhancing 
            my full-stack skills by learning Node.js. I am eager to contribute to innovative projects and grow as a developer 
            in a dynamic environment. </p>
        </div>
        <div >
            <a  href="https://www.linkedin.com/in/arun-kumar-reddy-rakasi-314385256/"><button style={{margin:"10px",padding:"10px",color:"white",fontSize:"20px",backgroundColor:"black",borderRadius:"30px",boxShadow: "0 4px 8px pink"}}>LinkedIn</button></a>
            <a  href="https://github.com/rakasiarunkumarreddy?tab=repositories"><button style={{margin:"20px",padding:"10px",color:"white",fontSize:"20px",backgroundColor:"black",borderRadius:"30px",boxShadow: "0 4px 8px pink"}}>Github</button></a>
        </div>
      </div>
    </div>
  )
}

export default Home
