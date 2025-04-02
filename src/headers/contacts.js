import React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/styles.css"

const Contacts = () => {
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
      <h1 style={{color:"maroon"}}>Contact Details</h1>
      <div style={{marginTop:"6%"}}>
        <h1 style={{color:"black"}}>Name: Arun Kumar Reddy Rakasi</h1>
        <h1 style={{color:"black"}}>Email-id: rarunreddy2002@gmail.com</h1>
        <h1 style={{color:"black"}}>Phno: 6309708105</h1>
        <h1 style={{color:"green"}}>or contact via</h1>
      </div>
      <div className='img'>
        <a href="https://www.linkedin.com/in/arun-kumar-reddy-rakasi-314385256/"><img alt="" src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"/></a>
        <a href="https://github.com/rakasiarunkumarreddy?tab=repositories"><img alt="" src="https://imgs.search.brave.com/C0b1YPSqqNlsVlGjxul65YgtScib1gsLrXe2rLCU4Tg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy9naXRo/dWItaWNvbi1mb3It/cmVzdW1lL2dpdGh1/Yi1pY29uLWZvci1y/ZXN1bWUtMS5qcGc"/></a>
        <a href="www.gmail.com"><img alt="" src="https://imgs.search.brave.com/jHh-7Cruhcgw4Vy8H0i-IIXKQvAUp3n4ekZujqCMKhk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waXVu/aWthd2ViLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/OC9HbWFpbC0xLmpw/Zw"/></a>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Contacts
