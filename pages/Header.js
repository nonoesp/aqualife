import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from "../public/images/aqualife-logo.png";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useSpring, animated} from "react-spring";
import "../myscript.js";


function Header() {

  const props= useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })
 return (
   <div> 
 <div class="headerPosition" id="myHeader">
        <Navbar  expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link href="#v0">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            {/* <Nav.Link href="/Test">Test</Nav.Link> */}
            <div  class="logoPosition"> 
            <Nav.Link > <img src='../images/aqualife-logo.png' class="headerLogo" alt="logo" /> </Nav.Link>
            </div>
            <Nav.Link href="#contact">Get In Touch</Nav.Link>
          </Nav>
        <div class="socialMedia">
          <Nav.Link>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12.472 24.942"><path d="M16.382,4.141h2.277V.176A29.4,29.4,0,0,0,15.342,0C12.059,0,9.81,2.065,9.81,5.86V9.353H6.187v4.433H9.81V24.942h4.442V13.788h3.476l.552-4.433H14.25V6.3c0-1.281.346-2.159,2.131-2.159Z" transform="translate(-6.187)" fill="#28464d"/></svg>
          </p></Nav.Link>
          <Nav.Link>
          <p>  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28.838 23.431"><g transform="translate(-0.539 -0.438)"><g transform="translate(0.539 0.438)"><path d="M28.838,50.774a12.326,12.326,0,0,1-3.406.934,5.879,5.879,0,0,0,2.6-3.268,11.815,11.815,0,0,1-3.749,1.431,5.912,5.912,0,0,0-10.227,4.043,6.088,6.088,0,0,0,.137,1.348A16.734,16.734,0,0,1,2.008,49.078a5.914,5.914,0,0,0,1.817,7.9,5.838,5.838,0,0,1-2.671-.728v.065A5.939,5.939,0,0,0,5.89,62.125a5.9,5.9,0,0,1-1.55.195,5.227,5.227,0,0,1-1.119-.1,5.968,5.968,0,0,0,5.524,4.118,11.879,11.879,0,0,1-7.33,2.522A11.072,11.072,0,0,1,0,68.778a16.644,16.644,0,0,0,9.07,2.653c10.879,0,16.827-9.012,16.827-16.823,0-.261-.009-.514-.022-.764A11.794,11.794,0,0,0,28.838,50.774Z" transform="translate(0 -48)" fill="#28464d"/></g></g></svg>
          </p></Nav.Link>
          <Nav.Link>
          <p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24.213 24.213"><path d="M17.658,0H6.553A6.562,6.562,0,0,0,0,6.554v11.1a6.562,6.562,0,0,0,6.554,6.554h11.1a6.561,6.561,0,0,0,6.554-6.554V6.554A6.562,6.562,0,0,0,17.658,0ZM12.105,18.727a6.621,6.621,0,1,1,6.621-6.621A6.628,6.628,0,0,1,12.105,18.727Zm6.779-11.68a1.956,1.956,0,1,1,1.956-1.956A1.958,1.958,0,0,1,18.884,7.047Zm0,0" transform="translate(0.001 0)" fill="#28464d"/><path d="M151.221,146.02a5.2,5.2,0,1,0,5.2,5.2,5.207,5.207,0,0,0-5.2-5.2Zm0,0" transform="translate(-139.115 -139.115)" fill="#28464d"/><path d="M388.529,96.3a.537.537,0,1,0,.537.537A.538.538,0,0,0,388.529,96.3Zm0,0" transform="translate(-369.644 -91.747)" fill="#28464d"/></svg>
          </p></Nav.Link>
          </div> 
        </Navbar.Collapse>
      </Navbar>
       
    </div>  
   
  </div>
  
   )
       
}
export default Header;