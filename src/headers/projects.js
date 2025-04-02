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
      <ProjectCompo name=" Dream Nest " 
        description="Users can securely sign up and log in, with password hashing and JWT authentication ensuring
        encrypted storage and protection against unauthorized access.
        Hosts can seamlessly upload property details, including descriptions, pricing, and high-quality
        images, and efficiently manage their listings through an intuitive UI.
        Users can explore available properties, filter based on preferences, and book them for a specified
        duration, with all booking details accurately stored in the database.
        The dashboard provides a well-organized view where users can track their uploaded properties,
        wished properties, and confirmed bookings in real time.
        Real-time updates ensure that newly listed properties and bookings are reflected in the system. "
        url="https://github.com/rakasiarunkumarreddy/dream_nest"
        deploy="https://dream-nest-lovat.vercel.app/"/>


        <ProjectCompo name="  Job Portal " 
        description="Developed a job portal with separate user and admin websites using React.js, featuring secure
        authentication and authorization with Firebase.
        Enabled admins to post jobs, view and manage user profiles, delete job postings, send emails to
        users, and approve or reject job applications.
        Added search functionality for admins to filter users and job postings, and allowed viewing details
        of other posted jobs.
        Designed the user website with features to browse, filter, and apply for jobs, track the status of
        applications, and manage a personal profile page.
        Implemented routing for efficient navigation and collaborated in a team of two to handle project
        requirements, development, and testing. "
        url="https://github.com/rakasiarunkumarreddy/jobportal"
        deploy="https://jobportal-chi-self.vercel.app/"/>


        <ProjectCompo name=" Stateful Restaurant Cards with React " 
        description="Created a responsive website using React.js, JavaScript, HTML, and CSS. Improved the layout with 
        a clear Header, Body, and Footer, which increased user satisfaction by 25%. 
        Reduced page load time by 40%, which led to a 30% rise in user engagement and a 20% boost in 
        overall website performance. 
        Used useState and useEffect hooks to manage state and update in real-time, cutting website crashes 
        by 15% and making the user experience smoother. 
        Enhanced website performance by applying React.js best practices, achieving a 35% faster load time 
        and a 20% increase in user retention, resulting in a more responsive and user-friendly interface. "
        url="https://github.com/rakasiarunkumarreddy/react_swiggy_app"
        deploy="https://react-swiggy-app-two.vercel.app/"/>

        <ProjectCompo name="  Typing Master " 
        description="Built a Typing Speed Test App using HTML, CSS, Bootstrap, and JavaScript, allowing users to test
        their typing skills in an interactive way.
        Added easy, medium, and hard modes that change the difficulty of the sentences based on the
        user's choice, making it more user-friendly.
        Showed real-time performance results like WPM, error count, accuracy, and time spent, giving
        users instant feedback on their typing speed.
        Designed the application to be responsive across devices, ensuring a seamless experience for
        mobile, tablet, and desktop users, boosting accessibility by 25%."
        url="https://github.com/rakasiarunkumarreddy/Typing_Master_JS-Project"
        deploy="https://rakasiarunkumarreddy.github.io/Typing_Master_JS-Project/"/>

       <ProjectCompo name="HTML,CSS Conquer" 
       url="https://github.com/rakasiarunkumarreddy/HTML-CSS_Project" description="A simple webpage using HTML and CSS is a great starting point for web development. It typically consists of a structured layout with a header, main content, and footer sections. HTML provides the skeleton of the webpage, organizing text, images, and links into meaningful elements. CSS adds style, enhancing the visual appeal with colors, fonts, and spacing. By combining these two technologies, developers can create responsive and interactive designs that adapt to different devices. This foundational knowledge opens doors to more advanced web development concepts, such as JavaScript and frameworks."
       deploy="https://rakasiarunkumarreddy.github.io/HTML-CSS_Project/"/>
        
        <ProjectCompo name="AI Based Scarecrow " description="Developed a real-time animal detection system to enhance wildlife management, covering 2 square 
        miles of protected land. 
        Achieved a 95% detection rate, significantly improving the monitoring of animal intrusions. 
        Reduced animal intrusions by 40% through automated sound alerts that scare them away. 
        Increased the accuracy of response measures by 25% with the implementation of sound-based alerts.  "/>
        
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Projects
