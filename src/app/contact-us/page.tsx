
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaGithubSquare, FaTiktok } from "react-icons/fa";

export default function Contact(){
    return(
        <div>
         
        <div className="form">
        <div className="contact" >
            <div className="contact-text">
                <h2>Contact <span>Me!</span></h2>
                <h4>If you have any project in your mind.</h4>
                <p>I'm a web Developer - creating bold & brave interface design for companies all over the world</p>
                <div className="list">
<li><a href="#">03253657042</a></li>
<li><a href="#">alishbashabbir312@gmail.com</a></li>
                </div>

                <div className="contact-icons">
            <FaFacebookF className="icon" />
            <FaGithub className="icon" />
            <FaLinkedinIn className="icon" />
            <FaInstagram className="icon" />
            <FaTiktok className="icon" />
           

                </div>
        </div>
                <div className="contact-form">
                    <form action="">
                        <input type="name" placeholder="Your Name" required/>
                        <input type="email" placeholder="Your Email" required/>
                        <input type="number" placeholder="Your Mobile Number" required/>
                        <textarea defaultValue="How can I help you?" />  
                         <input type="submit" value="Send Message" className="submit" required />
                    </form>
                </div>
            </div> 
         </div>
            
        </div>
        
    )
}