import React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import ProjectCompo from './projectCompo'

const Projects = () => {
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
      <div>
        <ProjectCompo name=" Stateful Restaurant Cards with React " description="Created a responsive website using React.js, JavaScript, HTML, and CSS. Improved the layout with 
        a clear Header, Body, and Footer, which increased user satisfaction by 25%. 
        Reduced page load time by 40%, which led to a 30% rise in user engagement and a 20% boost in 
        overall website performance. 
        Used useState and useEffect hooks to manage state and update in real-time, cutting website crashes 
        by 15% and making the user experience smoother. 
        Enhanced website performance by applying React.js best practices, achieving a 35% faster load time 
        and a 20% increase in user retention, resulting in a more responsive and user-friendly interface. "/>

        <ProjectCompo name="HTML,CSS Conquer" description="A simple webpage using HTML and CSS is a great starting point for web development. It typically consists of a structured layout with a header, main content, and footer sections. HTML provides the skeleton of the webpage, organizing text, images, and links into meaningful elements. CSS adds style, enhancing the visual appeal with colors, fonts, and spacing. By combining these two technologies, developers can create responsive and interactive designs that adapt to different devices. This foundational knowledge opens doors to more advanced web development concepts, such as JavaScript and frameworks."/>
        
        <ProjectCompo name="AI Based Scarecrow " description="Developed a real-time animal detection system to enhance wildlife management, covering 2 square 
        miles of protected land. 
        Achieved a 95% detection rate, significantly improving the monitoring of animal intrusions. 
        Reduced animal intrusions by 40% through automated sound alerts that scare them away. 
        Increased the accuracy of response measures by 25% with the implementation of sound-based alerts. "/>
        
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Projects
