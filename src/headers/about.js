import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

const About = () => {
    // Corrected style object
    const styles = {
        height: "70vh",
        marginTop: "40px",
        marginBottom: "40px",
        marginLeft: "200px",
        marginRight: "200px",
        backgroundColor: "Lightgray",
        overflowY: "scroll",
        borderRadius: "10px",
        padding:"30px"
    };

    return (
        <div>
            <Header />
            <div style={styles}>
                <h1 style={{color:"maroon"}}>About Me</h1>
                <p>
                    I am a motivated Front-End Developer with hands-on experience in HTML, CSS, JavaScript, and React.js, 
                    specializing in creating responsive, mobile-friendly websites with Bootstrap and ensuring cross-browser compatibility. 
                    Proficient in using Git and GitHub for version control and collaborative development. In addition to front-end expertise, 
                    I have a foundation in SQL and basic knowledge of Python, and I am currently enhancing my full-stack skills by learning Node.js. 
                    I am eager to contribute to innovative projects and grow as a developer in a dynamic environment.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default About;
