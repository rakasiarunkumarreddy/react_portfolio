import React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import "../headers/stylesh.css"

const Skills = () => {
    const styles = {
        height: "80vh",
        marginTop: "40px",
        marginBottom: "40px",
        marginLeft: "200px",
        marginRight: "200px",
        backgroundColor: "Lightgray",
        overflowY: "scroll",
        borderRadius: "10px" // Optional: for rounded corners
    };
    

  return (
    <div>
    <Header/>
    <div style={styles}>
      <ul className='skills_ul'>
        <li style={{listStyleType:"none"}}><h1 style={{color:"maroon"}}>Skills</h1></li>
        <li className='skills_ul'>HTML</li>
        <li className='skills_ul'>CSS</li>
        <li className='skills_ul'>JavaScript</li>
        <li className='skills_ul'>React.js</li>
        <li className='skills_ul'>Bootstrap</li>
        <li className='skills_ul'>SQL</li>
        <li className='skills_ul'>Node.js</li>
      </ul>
    </div>
    <Footer/>
  </div>
  )
}

export default Skills
