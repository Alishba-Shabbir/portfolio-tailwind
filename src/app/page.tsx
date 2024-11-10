import React from "react";
import Image from "next/image";
import profileImage from "@/public/profileImage.jpg"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
export default function Home() {
  return (
   <div>
    
     <div className="portfolio-container">
     <div className="left-container">
         <div className="socialLinks">
         <FaFacebookF className="icon" />
            <FaGithub className="icon" />
            <FaLinkedinIn className="icon" />
         </div>
         <div className="content">
          <p className="tracking-in-expand" >Hi! I'm <span>Alishba Shabbir</span></p>
          <h1 className="text-pop-up-br"> Web Developer</h1>
          <p className="detail-focus-in-expand-fwd">"Highly skilled frontend web developer with expertise in HTML, CSS, TypeScript, and responsive web design. Proven track record of delivering high-performance, scalable web applications with a focus on user experience.</p>
         <div className="button-container">
          <button>Hire Me</button>
          <button>View Projects</button>
         </div>
         
         </div>
     </div>

     <div className="right-container"></div>
      <div className="design">

        <div className="circle"></div>
        <div className="circle">
          <Image className="image"
          src={profileImage}
          alt="image"
          
          />
        </div>


       
      </div>
      

     </div>
  
   </div>
       
  );
}









































